var cf = require("./captionfirst");
var df = require("./caption");
let finalcaption = "";
let reviewstring = "There are multiple emojis detected in your caption. Consider using lesser emojis. \nThere may be words where uppercase is used very frequently. \nThe hashtags do not appear to be camelcased. ";
let dir = "D:\\DOWNLOADS\\BSc\\Inclusify\\BackEnd\\TrialComp\\bhangra.jpg";
let inp = "hi THERE 😀😃😄😁 #havingfun #livelyhuman"

cf.computerVision(dir).then(
    function (output) {
        let cap = new df.Caption(inp);
        cap.removeemoji();
        cap.correctcaps();
        
        
        const capa = async () => {
            await cap.correcthashtags();
            
            finalcaption += "Image Description: "
            finalcaption += output + "\n"; // Azure caption
            finalcaption += cap.caption + " "; // Caption corrector
            console.log(finalcaption);
            console.log(reviewstring);
        };
        capa();
    }
  )
