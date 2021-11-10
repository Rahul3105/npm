var qrcode = require("qrcode");
var commander = require("commander");
var program = new commander.Command();

program
  .argument("<text>", "Add some text")
  .option("o, --output <type>", "Add filename", "img.png")
  .action(function (text, { output }) {
    qrcode.toFile(output, text, function (err) {
      if (err) console.log(err);
      else console.log("done");
    });
  });
program.parse();
