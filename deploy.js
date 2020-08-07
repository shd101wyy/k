const ghpages = require("gh-pages");
ghpages.publish(
  "public_content",
  {
    branch: "gh-pages",
  },
  function (error) {
    console.log(error);
  }
);
