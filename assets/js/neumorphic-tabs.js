(function ($) {
  $.fn.neumorphicTabs = function () {
    $(this).each(function () {
      let tabsNav = $(this).find(".tabs--nav");
      let tabsContent = $(this).find(".tabs--content");

      tabsNav.append("<div class='tabs--fx'/>");

      let activeNavItem = tabsNav.find(".active").length
        ? tabsNav.find(".active")
        : tabsNav.children().first();
      
      // Init position
      tabsNav.attr(
        "style",
        `--tab-width: ${activeNavItem.outerWidth()}px; --tab-position: `
      );

      let tabsFx = tabsNav.find(".tabs--fx");

      function translateTabsFx(activeEl) {
        tabsFx.height(activeEl.outerHeight()).animate({
          opacity: 1,
          left: activeEl.position().left + parseInt(activeEl.css("marginLeft")),
          width: activeEl.outerWidth()
        });
      }

      translateTabsFx(activeNavItem);

      // Init tabs
      tabsNav
        .children()
        .not("div")
        .each(function (i) {
          if (i == 0 && !tabsNav.find(".active").length) 
            $(this).addClass("active");
          $(this).attr("data-tab", i);
        });

      // MODIFIED: Handle .tab-content instead of direct children
      $('.tab-content').each(function(i) {
        if (i == 0) {
          $(this).addClass('active').show();
        } else {
          $(this).hide().removeClass('active');
        }
        $(this).attr('data-tab', i);
      });

      // Click handler
      tabsNav.children().on("click", function () {
        let currentTab = $(this);
        if (currentTab.hasClass("active") || currentTab.hasClass("tabs--fx"))
          return false;
        
        tabsNav.children().each(function () {
          $(this).addClass("wait-animation");
        });
        
        translateTabsFx(currentTab);
        tabsNav.find(".active").removeClass("active");
        currentTab.addClass("active");

        // MODIFIED: Handle .tab-content
        $('.tab-content.active').fadeOut().removeClass('active').promise().done(() => {
          $(`.tab-content[data-tab='${currentTab.attr('data-tab')}']`)
            .fadeIn()
            .addClass('active');
          tabsNav.children().each(function () {
            $(this).removeClass("wait-animation");
          });
        });
      });
    });
    return this;
  };
})(jQuery);

// Init after DOM ready
$(document).ready(function() {
  $(".tabs").neumorphicTabs();
});
