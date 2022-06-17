const $chip = $(".wrap-catalog-slider .catalog-grid-item-chip-block");

$chip.on("mouseenter", function () {
  if ($(window).width() < 768) {
    return;
  }

  const $tooltipCurrent = $(this).find(".tooltip");
  const points = $tooltipCurrent.find(".tooltip__title").text();
  const link = $tooltipCurrent.find("a").attr("href");

  const $parent = $(this).parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();
  $tooltip.find(".tooltip__title").text(points);
  $tooltip.find("a").attr("href", link);

  const offsetP = $parent.offset();
  const offset = $(this).offset();

  console.log("left", offset.left - offsetP.left - Math.round($(this).width() / 2));

  const leftGap = offset.left - offsetP.left - Math.round($(this).width() / 2);

  const leftDist = leftGap <= 10 ? 10 - leftGap : 0;

  $tooltip.css({
    top: `${offset.top - offsetP.top}px`,
    left: `${offset.left - offsetP.left + Math.round($(this).width() / 2) + leftDist}px`,
    display: "block",
  });
});

$chip.on("mouseleave", function () {
  const $parent = $(this).parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();

  $tooltip.css("display", "none");
});
