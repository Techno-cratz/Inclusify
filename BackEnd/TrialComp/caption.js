// preprocessing of the provided caption
const camelCase = require('camelcase');
class Caption {
    constructor(caption) {
        this.caption = caption;
    }

    removeemoji() {
        // Will find the emojis > Make new string with no emoji > Make another string with emojis
        var regex = /\p{Emoji_Presentation}/gu;
        emojis = this.caption.match(regex);
        return this.caption.replace(regex, '');
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

    }

    main() {

    }
}

let cap = new Caption("My trip to Lake Louise. #beautifulscenery #lake #ilovenature")
console.log(cap.correcthashtags())