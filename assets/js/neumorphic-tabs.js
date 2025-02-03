(function ($) {
	$.fn.neumorphicTabs = function () {
		$(this).each(function () {
			let tabsNav = $(this).find(".tabs--nav");
			let tabsContent = $(this).find(".tabs--content");

			tabsNav.append("<div class='tabs--fx'/>");

			let activeNavItem = tabsNav.find(".active").length
				? tabsNav.find(".active")
				: tabsNav.children().first();
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

			tabsNav
				.children()
				.not("div")
				.each(function (i) {
					if (i == 0 && !tabsNav.find(".active").length) $(this).addClass("active");
					$(this).attr("data-tab", i);
				});

			tabsContent.children().each(function (i) {
				if (tabsNav.find(".active").attr("data-tab") == i) {
					$(this).addClass("active");
				} else {
					$(this).hide();
				}
				$(this).attr("data-tab", i);
			});

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
				tabsContent
					.find(".active")
					.fadeOut()
					.promise()
					.done(function () {
						tabsContent
							.find(`[data-tab='${currentTab.attr("data-tab")}']`)
							.addClass("active")
							.fadeIn();
						tabsNav.children().each(function () {
							$(this).removeClass("wait-animation");
						});
					});
			});
		});
		return this;
	};
})(jQuery);

$(".tabs").neumorphicTabs();
