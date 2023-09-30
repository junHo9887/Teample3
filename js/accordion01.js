$(document).ready(function () {
  $("dd").hide(); //모든dd숨김
  $("dd").addClass("active"); //dd클래스추가
  $("dt").click(function () {
    if ($("+dd", this).css("display") == "none") {
      $("dd").slideUp(); //모든dd슬라이드업
      $("+dd", this).slideDown(); //클릭한 그것의 인접dd만 슬라이드다운
      $("dt").removeClass("active");
      $(this).addClass("active");
    }
    else {
      $("+dd", this).slideUp();
      $("dt").removeClass("act");
      $(this).addClass("act");

    }
    // $("#img").css("transform", "rotate(-90deg)");
  });
});
