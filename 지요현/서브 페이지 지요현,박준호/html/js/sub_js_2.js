

// left_sub2_menu>li>a 클릭했을떄 left_sub2_menu>div가 디스플레이런 none을 해제한다.

// $(".left_sub2_menu>li>a").click(function () {
//   $(".left_sub2_menu>div").show();
// });

// $(".left_sub2_menu>li>a").click(function () {
//   $(".left_sub2_menu>div").hide();
// });

// $("#click_1_1").click(function () {
//   // click_1_1 클릭했을때 click_1 값에 display:none이 있을경우 blaok을 해준다.
//   $("#click_1 div").hide();
//   $( "h1" ).css( "color" );

// });
// $("#click_1_1").click(function () {
//   $("#click_1 div").show();
// });

$("#click_1_1").click(function () {
  $("#click_1 div").slideToggle(300);
});

$("#click_2_2").click(function () {
  $("#click_2 div").slideToggle(300);
});