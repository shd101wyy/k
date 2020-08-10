/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

(function () {
  "use strict"; // use strict to start

  /* ---------------------------------------------
     WOW init
     --------------------------------------------- */

  new WOW().init();

  const md = new MarkdownIt({
    html: true,
    linkify: true,
  });

  $(document).ready(function () {
    // Sidebar menu
    $(".bd-search-docs-toggle").click(() => {
      if ($(".bd-search-docs-toggle").hasClass("collapsed")) {
        $(".bd-sidebar > nav").addClass("show");
        $(".bd-search-docs-toggle").removeClass("collapsed");
      } else {
        $(".bd-sidebar > nav").removeClass("show");
        $(".bd-search-docs-toggle").addClass("collapsed");
      }
    });

    // Render markdown
    $("[data-markdown]").each((index, element) => {
      const markdown = JSON.parse(
        '"' + element.getAttribute("data-markdown") + '"'
      );
      const result = md.render(markdown);
      element.innerHTML = result;
    });
  });
})(jQuery);
