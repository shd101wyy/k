const readline = require("readline");
const fs = require("fs");
const path = require("path");

const files = {
  "./static_content/html/404.html": "404.html",
  "./static_content/html/500.html": "500.html",
  "./static_content/html/index.html": "index.html",
};

const outPath = "./public_content/";
const basePath = "static_content/html/";

const regexp = /{{(.*)}}/;

for (file in files) {
  const fileName = outPath + files[file];
  const dirname = path.dirname(fileName);

  if (!fs.existsSync(dirname)) fs.mkdirSync(dirname);

  const output = fs.createWriteStream(fileName);

  const lineReader = readline.createInterface({
    input: fs.createReadStream(file),
  });

  lineReader.on("line", function (line) {
    const match = line.match(regexp);
    var content = line + "\n";

    if (match && match.length == 2) {
      content = fs.readFileSync(basePath + match[1]);
    }

    output.write(content);
  });

  lineReader.on("close", function () {
    output.end();
    console.log("Written file: " + fileName);
  });
}
