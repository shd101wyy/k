const readline = require("readline");
const fs = require("fs");
const path = require("path");
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt({
  html: true,
  linkify: true,
});

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
};

const outPath = "./public_content/";
const basePath = "static_content/html/";
const regexp = /{{(.*)}}/;

/**
 *
 * @param {string} sourceHTML the HTML content
 * @param {string} targetFilePath path relative to current __dirname
 * @param {object} variables variables map
 */
function generateOutputWebpage(sourceHTML, targetFilePath, variables = {}) {
  const filePath = targetFilePath.startsWith("/")
    ? targetFilePath
    : path.join(__dirname, outPath, targetFilePath);
  const dirname = path.dirname(filePath);

  if (!fs.existsSync(dirname)) fs.mkdirSync(dirname, { recursive: true });

  const relative = path.relative(dirname, outPath);

  const resultHTML = sourceHTML
    .split("\n")
    .map((line) => {
      const match = line.match(regexp);
      let content = line;

      if (match && match.length == 2 && !match[1].startsWith("$")) {
        content = fs.readFileSync(basePath + match[1]).toString();
      }

      // Fix assets folder path error for github page
      content = content.replace(/{{\$(.+?)}}/g, (_, variableName) => {
        if (variableName === "ROOT") {
          return relative || ".";
        } else if (variableName in variables) {
          return variables[variableName];
        } else {
          return _;
        }
      });

      return content;
    })
    .join("\n");
  fs.writeFileSync(filePath, resultHTML);
  console.log("Written file: " + filePath);
}

function generateWebpages() {
  const tutorialTemplate = fs
    .readFileSync("./static_content/html/tutorial_template.html")
    .toString("utf-8");

  fs.rmdirSync(path.join(__dirname, "./public_content/tutorial"), {
    recursive: true,
  });

  const helper = (dirPath) => {
    for (const file of fs.readdirSync(dirPath)) {
      if (fs.statSync(path.resolve(dirPath, file)).isDirectory()) {
        helper(path.resolve(dirPath, file));
      } else if (file.endsWith(".md")) {
        const targetFilePath = path
          .resolve(
            dirPath
              .replace(/\/tutorial\//, "/public_content/tutorial/")
              .replace(/\/pages\//, "/public_content/"),
            file
          )
          .replace(/\.md$/, ".html");
        const markdown = fs
          .readFileSync(path.resolve(dirPath, file))
          .toString("utf-8");
        const html = md.render(markdown);

        generateOutputWebpage(tutorialTemplate, targetFilePath, {
          TITLE: targetFilePath,
          MARKDOWN_HTML: html,
        });
      }
    }
  };
  helper(path.join(__dirname, "./tutorial/"));
  helper(path.join(__dirname, "./pages/"));
}

for (file in files) {
  generateOutputWebpage(fs.readFileSync(file).toString("utf-8"), files[file]);
}

generateWebpages();
