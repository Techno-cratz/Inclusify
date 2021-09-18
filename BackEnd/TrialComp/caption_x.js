const request = require('request');
var temp = ""
class Caption {
    constructor(caption) {
        this.caption = caption;
    }

    removeemoji() {
        // Will find the emojis > Make new string with no emoji > Make another string with emojis
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
            fetch("https://dnaber-languagetool.p.rapidapi.com/v2/check", {
                "method": "POST",
                "headers": {
                    "content-type": "application/x-www-form-urlencoded",
                    "x-rapidapi-host": "dnaber-languagetool.p.rapidapi.com",
                    "x-rapidapi-key": "1569dfa3aemsha00b48996627551p1f11d6jsn7ad35603d960"
                },
                "body": {
                    "text": tags[i],
                    "language": "en-US"
                }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.error(err);
            });
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