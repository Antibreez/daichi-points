$(window).on("load", function () {
  const $totalPointsBar = $(".spend-points__bar");
  const $currentPointsBar = $(".spend-points__bar-current");
  const $currentPointsBarText = $(".spend-points__bar-current-text span");
  const $limitPoinsBar = $(".spend-points__bar-limit");

  const $currentPoints = $("#spend-points-current");
  const $totalPoints = $("#spend-points-total");
  const $limitPoints = $("#spend-points-limit");
  const $pointsLeft = $(".spend-points__balance span");

  const $inputBlock = $(".input-block.points");
  const $minusBtn = $(".spend-points__minus");
  const $plusBtn = $(".spend-points__plus");
  const $input = $('input[name="points-amount"]');

  const $submitBtn = $('#spend-points button[type="submit"]');

  const getCurrentBar = () => {
    return Math.ceil((+$input.val() / +$totalPoints.text()) * 1000) / 10;
  };

  const getLimitBar = () => {
    return Math.ceil((+$limitPoints.text() / +$totalPoints.text()) * 100);
  };

  const changeInput = () => {
    if (!isNaN(+$input.val()) && +$input.val() > 0) {
      if (+$input.val() <= +$limitPoints.text()) {
        $currentPointsBar.css("width", `${getCurrentBar()}%`);
        $currentPointsBarText.text($input.val());
        $currentPoints.text($input.val());
        $inputBlock.removeClass("error");
        $submitBtn.removeAttr("disabled");

        $pointsLeft.text(+$limitPoints.text() - +$currentPoints.text());
      } else {
        $currentPointsBar.css("width", `${getLimitBar()}%`);
        $currentPointsBarText.text($limitPoints.text());
        $currentPoints.text($limitPoints.text());
        $inputBlock.addClass("error");
        $submitBtn.attr("disabled", true);

        $pointsLeft.text(+$limitPoints.text() - +$currentPoints.text());
      }
    } else {
      $inputBlock.addClass("error");
      $submitBtn.attr("disabled", true);
      $currentPointsBarText.text(0);
      $currentPoints.text(0);
      $currentPointsBar.css("width", `0%`);

      $pointsLeft.text(+$limitPoints.text() - +$currentPoints.text());
    }
  };

  console.log(getLimitBar());

  $input.on("input", changeInput);

  $plusBtn.on("click", function () {
    if (isNaN(+$input.val())) {
      $input.val(0);
    }

    $input.val(`${+$input.val() + 1}`);

    changeInput();
  });

  $minusBtn.on("click", function () {
    if (isNaN(+$input.val())) {
      $input.val(1);
    }

    if (+$input.val() - 1 < 0) {
      $input.val(0);
    } else {
      $input.val(`${+$input.val() - 1}`);
    }

    changeInput();
  });
});
