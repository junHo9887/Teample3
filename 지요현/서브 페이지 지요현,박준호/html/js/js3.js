var notice = document.getElementById("notice");
var camp = document.getElementById("camp");
var content1 = document.querySelector(".content1");
var content2 = document.querySelector(".content2");

notice.addEventListener("click", function () {
  content1.style.display = "block";
  content2.style.display = "none";
  notice.style.height = "80px";
  camp.style.height = "60px";
  notice.style.top = "0";
  camp.style.top = "0";
});

camp.addEventListener("click", function () {
  content1.style.display = "none";
  content2.style.display = "block";
  camp.style.height = "80px";
  notice.style.height = "60px";
  camp.style.lineHeight = "3";
  camp.style.top = "-20px";
  notice.style.top = "20px";
});
