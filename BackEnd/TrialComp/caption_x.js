var axios = require("axios").default;
const camelCase = require('camelcase');
var temp = ""
class Caption {         // #ilovenature  ---> api call to languaetool --> i Love Nature --> #iLoveNature
    constructor(caption) {
        this.caption = caption;
    }

    removeemoji() {
        // Will find the emojis > Make new string with no emoji > Make another string with emojis
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

    }

    main() {

    }
}

let cap = new Caption("My trip to Lake Louise. #beautifulscenery #iloveyou #lovemonkeys ")
console.log(cap.correcthashtags())