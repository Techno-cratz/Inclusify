// preprocessing of the provided caption
const camelCase = require('camelcase');
const request = require('request');
var axios = require("axios").default;
class Caption {
    
    constructor(caption) {
        this.caption = caption;
        this.temp = "Hello"
    }

    removeemoji() {
        // Will find the emojis > Make new string with no emoji > Make another string with emojis
        var regex = /\p{Emoji_Presentation}/gu;
        let emojis = this.caption.match(regex);
        if (emojis.length == 1) {
            return this.caption;
        } else {
            let new_cap = this.caption.replace(regex, '');
            let indexPosition = new_cap.indexOf("#");
            new_cap = new_cap.split('');
            new_cap.splice(indexPosition-1, 0, emojis[0]);
            new_cap = new_cap.join('');
            //new_cap += emojis[0];
            return new_cap;
        }
    }

    foo(error, response, body) {
        console.log(this.temp);

    }

    async correcthashtags() {
        let tags =  this.caption.match(/#[a-z]+/gi);
        let temp = "abcd";
        let correct_tags = "";
        var hash = "#"
        var newword;
       
        for (let i=0; i<tags.length; i++) {
            tags[i] = tags[i].replace(/\#/g, '');
        }
        for (let i=0; i<tags.length; i++) {
            console.log(tags[i]);
            var options = {
                method: 'POST',
                url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'x-rapidapi-host': 'dnaber-languagetool.p.rapidapi.com',
                    'x-rapidapi-key': '1569dfa3aemsha00b48996627551p1f11d6jsn7ad35603d960'
                },
                params: {text: tags[i], language: 'en-US'}
                };
                
                var str = await axios.request(options).then(function (response) {
                    return response.data["matches"][0]["replacements"][0]["value"];
                }).catch(function (error) {
                    console.error(error);
                });
                tags[i] = hash.concat(camelCase(str));
        }
        console.log(tags);
        return tags;
    }

    correctcaps() {
        let words = this.caption.trim().split(" ");

        var corrected_string = '';
        var updated = '';

        for (let i = 0; i < words.length; i++ ) {
            words[i].toLowerCase();
            if (i == 0) {
                updated = words[i].charAt(0).toUpperCase() + words[i].slice(1);
            } else {
                updated = words[i].toLowerCase();
            }
            corrected_string += updated;
            corrected_string += " ";
        }
        return corrected_string;
    }

    main() {

    }
}

let cap = new Caption("my trip TO LaKe Louise.😂 #beautifulscenery #iloveyou")
console.log(cap.correcthashtags())
