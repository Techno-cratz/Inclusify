// preprocessing of the provided caption
const camelCase = require('camelcase');
const request = require('request');
class Caption {
    
    constructor(caption) {
        this.caption = caption;
        this.temp = "Hello"
    }

    removeemoji() {
        // Will find the emojis > Make new string with no emoji > Make another string with emojis
    }

    foo(error, response, body) {
        console.log(this.temp);

    }

    correcthashtags() {
        let tags =  this.caption.match(/#[a-z]+/gi);
        let temp = "abcd";
        let correct_tags = "";
        var hash = "#"
        var newword;
       
        for (let i=0; i<tags.length; i++) {
            tags[i] = tags[i].replace(/\#/g, '');
        }
        for (let i=0; i<tags.length; i++) {
            let temp = "";
            const options = {
            method: 'POST',
            url: 'https://dnaber-languagetool.p.rapidapi.com/v2/check',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'dnaber-languagetool.p.rapidapi.com',
                'x-rapidapi-key': '1569dfa3aemsha00b48996627551p1f11d6jsn7ad35603d960',
                useQueryString: true
            },
            form: {text: tags[i], language: 'en-US'}
            };

            let r = request(options, this.foo)
            //     function (error, response, body) {
            //     console.log(temp);
            //     if (error) throw new Error(error);

            //     newword = hash.concat(camelCase(newword));
            // });
        }
        return tags;
    }

    correctcaps() {

    }

    main() {

    }
}

let cap = new Caption("My trip to Lake Louise. #beautifulscenery")
console.log(cap.correcthashtags())