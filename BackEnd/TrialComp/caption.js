// preprocessing of the provided caption
const camelCase = require('camelcase');
class Caption {
    constructor(caption) {
        this.caption = caption;
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

    correcthashtags() {
        const tags =  this.caption.match(/#[a-z]+/gi);
        let correct_tags = [];
        for (let i=0; i<tags.length; i++) {
            tags[i] = tags[i].replace(/\#/g, '');
        }
        /* for (let i=0; i<tags.length; i++) {
            const request = require('request');
            const options = {
            method: 'POST',
            url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'dnaber-languagetool.p.rapidapi.com',
                'x-rapidapi-key': '1569dfa3aemsha00b48996627551p1f11d6jsn7ad35603d960',
                useQueryString: true
            },
            form: {text: 'beautifulscenery', language: 'en-US'}
            };

            request(options, function (error, response, body) {
                if (error) throw new Error(error);

                console.log(body);
            }); */
        return tags
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

let cap = new Caption("my trip TO LaKe Louise.😂 #beautifulscenery #lake #ilovenature")
console.log(cap.correcthashtags())
console.log(cap.removeemoji())
console.log(cap.correctcaps())
let cap1 = new Caption("my trip TO LaKe Louise.😂😂 #beautifulscenery #lake #ilovenature")
console.log(cap1.correcthashtags())
console.log(cap1.removeemoji())
console.log(cap1.correctcaps())