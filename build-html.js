const readline = require("readline");
const fs = require("fs");
const path = require("path");

const files = {
  "./static_content/html/404.html": "404.html",
  "./static_content/html/500.html": "500.html",
  "./static_content/html/index.html": "index.html",
  "./static_content/html/downloads.html": "downloads.html",
  "./static_content/html/overview.html": "overview.html",
  "./static_content/html/faq.html": "faq.html",
  "./static_content/html/editor_support.html": "editor_support.html",
  "./static_content/html/people.html": "people.html",
  "./static_content/html/projects.html": "projects.html",
  "./static_content/html/project_ideas.html": "project_ideas.html",
  "./static_content/html/publications.html": "publications.html",
  "./static_content/html/news.html": "news.html",
  "./static_content/html/events.html": "events.html",
  "./static_content/html/funding.html": "funding.html",
  "./static_content/html/tutorials.html": "tutorials.html",

  // Tutorial
  "./static_content/html/tutorial/1_lambda/lesson1.html":
    "tutorial/1_lambda/lesson1.html",
  "./static_content/html/tutorial/2_imp/lesson1.html":
    "tutorial/2_imp/lesson1.html",
};

const outPath = "./public_content/";
const basePath = "static_content/html/";

const regexp = /{{(.*)}}/;

for (file in files) {
  const fileName = outPath + files[file];
  const dirname = path.dirname(fileName);

  if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true });

  const relative = path.relative(dirname, outPath);

  const output = fs.createWriteStream(fileName);

  const lineReader = readline.createInterface({
    input: fs.createReadStream(file),
  });

  lineReader.on("line", function (line) {
    const match = line.match(regexp);
    var content = line + "\n";

    if (match && match.length == 2 && match[1] !== "ROOT") {
      content = fs.readFileSync(basePath + match[1]).toString();
    }

    // Fix assets folder path error for github page
    content = content.replace(/('|"){{ROOT}}/g, ($0, $1) => $1 + relative);

    output.write(content);
  });

  lineReader.on("close", function () {
    output.end();
    console.log("Written file: " + fileName);
  });
}
