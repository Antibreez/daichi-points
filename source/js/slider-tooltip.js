const $chip = $(".wrap-catalog-slider .catalog-grid-item-chip-block");

$chip.on("mouseenter", function () {
  if ($(window).width() < 768) {
    return;
  }

  const $parent = $(this).parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();

  const offsetP = $parent.offset();
  const offset = $(this).offset();

  $tooltip.css({
    top: `${offset.top - offsetP.top}px`,
    left: `${offset.left - offsetP.left + Math.round($(this).width() / 2)}px`,
    display: "block",
  });

  console.log("over");
  console.log($(this).width());
  console.log(offset.top - offsetP.top);
  console.log(offset.left - offsetP.left);
});

$chip.on("mouseleave", function () {
  const $parent = $(this).parents(".wrap-catalog-slider").first();
  const $tooltip = $parent.find(".tooltip").first();

  $tooltip.css("display", "none");
});
