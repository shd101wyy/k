/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

(function () {
  "use strict"; // use strict to start

  /* ---------------------------------------------
     WOW init
     --------------------------------------------- */

  new WOW().init();

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

    // Sanitize links
    $("a").each((index, anchorElement) => {
      try {
        const href = new URL(anchorElement.href);
        if (href.host === location.host) {
          if (anchorElement.href.endsWith(".md")) {
            anchorElement.href = anchorElement.href.replace(/.md$/, ".html");
          }
        } else {
          anchorElement.setAttribute("target", "_blank");
          anchorElement.setAttribute("rel", "noopener");
        }
      } catch (error) {}
    });
  });
})(jQuery);
