$(document).ready(function () {
  //기본설정
  //첫번째 dd제외하고 너비값 0
  // $('dd:not(:first)').css('width', '0px');
  // $('dt:first').addClass('active');
  // $('dt').click(function () {
  //   $('dd').animate({ width: '0px' });
  //   $('+dd', this).animate({ width: '600px' });
  // });

  // $('.depth2').hide();
  // $('.gnb').hover(function () {
  //   $('.depth2').stop().slideToggle();
  // });

  var swiper = new Swiper(".m_mySwiper", {});

  $(".section3_box_bot li").hover(
    function () {
      $(this).attr("class", "addclass");
      $(".section3_box_bot li", this).show();
    },
    function () {
      $(this).removeClass("addclass");
      $(".section3_box_bot li", this).hide();
    }
  );

  // $('.section3_box_bot li:nth-of-type(1)').hover(function () {
  //   $('.section3_box_bot li:nth-of-type(1)').css('flex', '25');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '1');
  //   $('.section3_box_bot li p:nth-of-type(1)').css('display', 'block');
  //   $('.sub_menu', this).show();
  // }, function () {
  //   $('.section3_box_bot li:nth-of-type(1)').css('flex', '1');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '25');
  //   $('.section3_box_bot li p').css('display', 'none');
  //   $('.sub_menu', this).hide();
  // });

  // $('.section3_box_bot li:nth-of-type(2)').hover(function () {
  //   $('.section3_box_bot li:nth-of-type(2)').css('flex', '25');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '1');
  //   $('.sub_menu', this).show();
  // }, function () {
  //   $('.section3_box_bot li:nth-of-type(2)').css('flex', '1');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '25');
  //   $('.sub_menu', this).hide();
  // });

  // $('.section3_box_bot li:nth-of-type(3)').hover(function () {
  //   $('.section3_box_bot li:nth-of-type(3)').css('flex', '25');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '1');
  //   $('.sub_menu', this).show();
  // }, function () {
  //   $('.section3_box_bot li:nth-of-type(3)').css('flex', '1');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '25');
  //   $('.sub_menu', this).hide();
  // });

  // $('.section3_box_bot li:nth-of-type(5)').hover(function () {
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '25');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '1');
  //   $('.sub_menu', this).show();
  // }, function () {
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '1');
  //   $('.section3_box_bot li:nth-of-type(4)').css('flex', '25');
  //   $('.sub_menu', this).hide();
  // });
});
