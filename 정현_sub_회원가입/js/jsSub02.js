/****** 체크박스 선택 jQuery ******/
// 체크박스 전체 선택
$(".agreements").on("click", "#agreeAll", function () {
  //agreeAll 이라는 id를 가진 것을 클릭시
  $(this) //선택한 그것의
    .parents(".agreements") //부모요소인 agreements라는 div박스 안에서
    .find("input") //input이라는 녀석들을 찾아서
    .prop("checked", $(this).is(":checked")); //input들과 선택한 그것(전체선택)이 체크되도록
}); //한번 더 누르면 당연히 체크가 해제 되겠죠?

// 체크박스 개별 선택
$(".agreements").on("click", ".normal", function () {
  //.normal 이라는 클래스 가진 것을 클릭시
  var is_checked = true; // is_checked라는 변수를 만들어 클릭되면 true 값을 가지도록 변수 선언

  $(".agreements .normal").each(function () {
    //전체를 감싸는 .agreements와 그 안의 .normal들의 클릭 여부 각각 검사하기 위하여 each 사용
    is_checked = is_checked && $(this).is(":checked"); // is_checked가 true이면서 선택된 그것이 체크되었는지 and 연산자로 확인. 둘 중 하나라도 false가 뜨면 전체선택이 해제되는 것임
  });

  $("#agreeAll").prop("checked", is_checked); //전체선택 박스의 체크 여부를 true로 설정한다. 아마 .normal들이 전부 체크되어있는 경우 맨 위쪽의 전체 체크 박스도 자동으로 체크되도록 하려는 코드로 보임.
});

// code reference : https://blog.minius.dev/entry/JS-%EC%B2%B4%ED%81%AC%EB%B0%95%EC%8A%A4-%EC%A0%84%EC%B2%B4%EC%84%A0%ED%83%9D-%EB%A1%9C%EC%A7%81-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%EC%95%BD%EA%B4%80%EB%8F%99%EC%9D%98-%EB%93%B1

// .prop : 선택한 요소 집합의 첫 번째 요소의 지정된 프로퍼티(property)값을 반환하거나, 선택한 요소의 지정된 프로퍼티를 전달받은 값으로 설정한다.
