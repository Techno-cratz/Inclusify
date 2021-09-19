var cf = require("./captionfirst");
var df = require("./caption");
let finalcaption = "";
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
        };
        capa();
    }
  )
