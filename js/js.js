/* var cntNum = 4;
function bGImgChg() {
  if (cntNum == 5) {
    cntNum = 1;
  }
  $("#backg").fadeOut("slow");
  $("#backg")
    .fadeIn("slow")
    .css(
      "background-image",
      "url('images/main_visual/main_visual" + cntNum + ".jpg')"
    );
  cntNum++;
}
var timer = setInterval(bGImgChg, 3000);
*/
function randombg() {
  var random = Math.floor(Math.random() * 3) + 1;
  var bigSize = [
    "url('images/main_visual/main_visual2.jpg')",
    "url('images/main_visual/main_visual3.jpg')",
    "url('images/main_visual/main_visual4.jpg')",
  ];
  document.getElementById("backg").style.backgroundImage = bigSize[random];
}
setTimeout(function () {
  randombg();
}, 3000);
