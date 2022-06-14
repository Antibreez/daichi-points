$(window).on("load", function () {
  let $totalPointsBar = $(".spend-points__bar");
  let $currentPointsBar = $(".spend-points__bar-current");
  let $currentPointsBarText = $(".spend-points__bar-current-text span");
  let $limitPoinsBar = $(".spend-points__bar-limit");

  let $currentPoints = $("#spend-points-current");
  let $totalPoints = $("#spend-points-total");
  let $limitPoints = $("#spend-points-limit");
  let $pointsLeft = $(".spend-points__balance span");

  let $inputBlock = $(".input-block.points");
  let $minusBtn = $(".spend-points__minus");
  let $plusBtn = $(".spend-points__plus");
  let $input = $('input[name="points-amount"]');

  let $submitBtn = $('#spend-points button[type="submit"]');

  const getCurrentBar = () => {
    return Math.ceil((+$input.val() / +$totalPoints.text()) * 1000) / 10;
  };

  const getLimitBar = () => {
    return Math.ceil((+$limitPoints.text() / +$totalPoints.text()) * 100);
  };

  const changeInput = () => {
    if (!isNaN(+$input.val()) && +$input.val() >= 0) {
      if (+$input.val() <= +$limitPoints.text()) {
        $currentPointsBar.css("width", `${getCurrentBar()}%`);
        $currentPointsBarText.text($input.val());
        $currentPoints.text($input.val().trim() === "" ? 0 : $input.val());
        $inputBlock.removeClass("error");
        $submitBtn.removeAttr("disabled");

        $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
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

      $pointsLeft.text(+$totalPoints.text() - +$currentPoints.text());
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

  $(".product-card__points a").on("click", function () {
    console.log("open");
    $totalPointsBar = $(".spend-points__bar");
    $currentPointsBar = $(".spend-points__bar-current");
    $currentPointsBarText = $(".spend-points__bar-current-text span");
    $limitPoinsBar = $(".spend-points__bar-limit");

    $currentPoints = $("#spend-points-current");
    $totalPoints = $("#spend-points-total");
    $limitPoints = $("#spend-points-limit");
    $pointsLeft = $(".spend-points__balance span");

    $inputBlock = $(".input-block.points");
    $minusBtn = $(".spend-points__minus");
    $plusBtn = $(".spend-points__plus");
    $input = $('input[name="points-amount"]');

    $submitBtn = $('#spend-points button[type="submit"]');

    console.log($totalPointsBar);
  });
});
