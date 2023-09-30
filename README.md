# 한국소비자교육원 

## 구성원 : 김정현(조장) 홍현석 박준호 지요현

## 제작 기간: 45일 (2023.05.02 ~ 2023.06.16)

## ⭐️ 프로젝트 설명

네 명의 팀원이 한국소비자교육원의 홈페이지를 각각의 섹션을 도맡아 리뉴얼한 첫 번째 프로젝트입니다.<br>

아래 사진은 기존 홈페이지의 모습입니다.
![cusBefore](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/12b70acf-c3e4-4f6c-868b-489c590e22c1)
<br>
<br>
기존 홈페이지를 살펴 세 가지의 개선사항을 도출하였습니다.

- Full Page 기준으로 왼쪽으로 쏠림 현상이 있습니다.
- 관련사이트 배너의 세로 나열로 인해 불필요한 하단 여백이 발생하였습니다.
- 중복되는 컨텐츠의 배치가 다수 발견되었습니다.
  <br>
  <br>

위에서 정리한 내용을 바탕으로 개선 방향을 정리하였습니다.

- 지나친 여백을 줄이고 페이지 공간을 효율적으로 활용하여 다양한 컨텐츠를 배치합니다.
- 자바스크립트 등을 활용한 동적 효과와 페이지의 메인컬러 변화를 통한 심미적 요소를 고려합니다.
- 중복되는 컨텐츠를 제거하고 남은 공간에 새로운 컨텐츠를 배치합니다.

## 💻 개발 환경

- 개발 환경 : <img src="https://img.shields.io/badge/windows10-0078D6?style=flat-square&logo=windows10&logoColor=white"/>
- 사용 프로그램 : <img src="https://img.shields.io/badge/Vs code-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/> <img src="https://img.shields.io/badge/Photoshop-31A8FF?style=flat-square&logo=adobephotoshop&logoColor=white"/> <img src="https://img.shields.io/badge/figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
- 사용된 기술 :
  <img src="https://img.shields.io/badge/html5-E34F26?style=flat-square&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/css3-1572B6?style=flat-square&logo=css3&logoColor=white"> <img src="https://img.shields.io/badge/jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"> <img src="https://img.shields.io/badge/Swiper-6332F6?style=flat-square&logo=Swiper&logoColor=white">

## 👀 페이지 구성

### 메인 페이지

| 섹션1 : Header & MainVisual (김정현)                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| ![cusMain2](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/3782575e-6ea9-4021-8f36-52049c2d7db5) |

| 기존 웹페이지의 사이드바 형식 Header를 가로형식으로 변경하고 hover시 서브메뉴들이 펼쳐지도록 레이아웃을 변경하였습니다.
<br>
<br>
| Header 뿐만 아니라 전체적인 컨텐츠들이 세로 바 형식으로 제작되어 가로 나열 된 기존 페이지 레이아웃을 보편적인 홈페이지처럼 스크롤하여 아래로 내려 확인할 수 있도록 전체적인 레이아웃을 변경하였습니다.
<br>
<br>
| 메인비주얼에 동적 효과를 주고자 배경이미지를 JavaScript의 setTimeOut과 반복문을 활용하여 4초마다 smooth하게 자동으로 변경되도록 설계하였습니다.
<br>
<br>
| 반응형으로 resize시 Header가 사라지면서 Hamberger 버튼이 나타나 Nav menu와 서브메뉴들을 아코디언 메뉴 형식으로 확인할 수 있도록 제작하였습니다.

<br>

| 섹션2 : 소비자교육원 최신활동 (지요현)                                                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| ![cusNews](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/669a5a2c-ec73-432c-88cb-1d13c0a88736) |

| 소비자교육원이 제공하는 자료들과 가장 최근 업데이트된 소식들을 바로 확인할 수 있는 섹션으로, 마우스 hover시 해당 컨텐츠 박스의 width가 변화하는 효과를 css로 주었습니다.

<br>

| 섹션3 : 공지사항, 캠페인 및 설문조사 (박준호)                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------ |
| ![cusCamp](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/b1ad7b2e-9716-4f52-b272-45d5230a60e0) |

| 소비자교육원에서는 각종 소비자 정보 뿐만아니라 어르신 모바일 쇼핑, 주부 축산물등급 교육 등 여러 캠페인들 또한 진행하고 있습니다. 이러한 중요한 소식과 정보들 기존 홈페이지에서는 메인페이지에서 제공하지 않고 서브페이지로 찾아들어가 확인해야했습니다. 따라서 중요 정보들의 최신 업데이트 사항을 메인 페이지에서 바로 확인할 수 있도록 탭 메뉴로 제작하였습니다.
<br>
<br>
| 또한 최근 사회적으로 이슈가 되는 소비자 관련 소식에 대해 설문조사를 진행하고 있으므로 이 또한 메인페이지에서 바로 참여 가능하도록 캠페인 섹션에 통합하여 배치하였습니다.

<br>

| 섹션4 : 소비자교육 (지요현)                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------------------- |
| ![cusEdu](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/8b896bd6-88b7-4cde-b301-edae7929e8f3) |

| 한국소비자교육원은 지역사회에서 활발한 교육활동을 진행하고 있습니다. 현장에서 받는 교육 뿐만 아니라 온라인 상으로도 교육자료를 받아볼 수 있도록 그동안 진행해온 자료들을 업로드함과 동시에 진행중 / 진행완료된 / 진행예정 교육에 대한 정보도 찾아볼 수 있습니다.
<br>
<br>
| 특히 소비자교육원에서 주력 교육 대상으로 삼고있는 주부, 어르신, 사회 취약계층에 대한 교육의 경우 따로 신청도 받고 있으므로 메인 화면에서 편하게 신청할 수 있도록 레이아웃을 설계하였습니다.

<br>

| 섹션5 : SNS 소통톡톡 (홍현석)                                                                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------- |
| ![cusSns](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/252776e1-ff57-4a67-9315-7b4700d5bf98) |

| 한국소비자교육원에서 운영하고 있는 SNS 사이트로 링크되는 섹션입니다. <br>
<br>
| 섹션 상단에 배치된 네비게이터는 한국소비자교육원이 운영하는 각각의 SNS 채널로 링크되어있고 로그인시 해당 정보를 열람할 수 있습니다.
<br>
<br>
| 반응형으로 resize시 네 개의 게시글이 Swiper을 활용한 슬라이드 형식으로 변화합니다.

<br>

| 섹션5 : 관련사이트 배너 및 Footer (박준호, 홍현석)                                                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------------------- |
| ![cusFooterBanner](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/a7610f49-887e-400c-bc14-2a4374a098e8) |

| 기존 홈페이지에서 세로로 나열되어 길게 배치되어있던 형식의 관련사이트 배너를 가로배열, 및 슬라이드를 사용하여 한 줄로 깔끔하게 확인할 수 있도록 배치하였습니다.
<br>
<br>
| 기본적인 소비자교육원의 정보를 담고 있는 Footer를 배치하였습니다.

<br>

### 서브페이지

| 서브페이지 1 : 로그인 (홍현석)                                                                                                         |
| :------------------------------------------------------------------------------------------------------------------------------------- |
| ![cusLogin](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/ef66ba28-2307-41b2-9616-fea065395928) |

| 로그인 페이지입니다.
<br/>
| 최근 SNS 계정으로 간편하게 로그인할 수 있는 방식과 비회원 일회성 로그인도 많은 사이트에서 활용되고 있으므로 최신 동향을 따라 페이지를 새로이 설계하였습니다.

<br>

| 서브페이지 2 : 회원가입 (김정현)                                                                                                        |
| :-------------------------------------------------------------------------------------------------------------------------------------- |
| ![cusSingup](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/c0d94f1e-df99-4c75-96f8-3a63c3c6efb4) |

| 회원가입 페이지입니다.
<br/>
| 최근 다양한 계정을 활용해서 간편하게 가입할 수 있는 방식이 많은 사이트에서 활용되고 있으므로 최신 동향을 따라 페이지를 새로이 설계하였습니다.
<br>
| 회원가입 form에 유효성 검사 기능을 추가하여 필수 정보를 입력하지 않으면 다음 정보 입력 란으로 넘어가지 않고 madal 창으로 경고 메시지를 띄워줍니다.
<br>
| 개인정보 수집 약관 동의의 경우 전체 동의를 클릭하면 모든 내용의 체크박스가 체크되며 선택 동의사항이 아니라 필수 동의사항을 하나라도 체크하지 않으면 form이 제출되지 않으며 madal로 필수 동의사항에 체크 하라는 메시지를 띄워줍니다.

<br>

| 서브페이지 3 : 공지사항 (박준호, 지요현)                                                                                                |
| :-------------------------------------------------------------------------------------------------------------------------------------- |
| ![cusNotice](https://github.com/Isabella-Kim/KoreaCustomerEducationCenterRenewal/assets/139948934/935114d3-db3b-4cfb-a57c-f0ec54cf72bb) |

| 공지사항 페이지입니다. 한국소비자교육원에서는 소비자교육, 각종 캠페인 뿐만 아니라 교육원 자체사업과 축산물 직거래, 직거래장터 운영 등 다양한 활동을 하고 있기 떄문에 이에 관한 공지사항들을 한 페이지에서 확인할 수 있도록 제작하였습니다.

<br>
## 🚀 링크

- [브레인 스토밍](https://www.figma.com/file/JkCP6CdIZ6SsCdbs5MlJK3/3%EC%A1%B0?type=whiteboard&node-id=0%3A1&t=DDhowMVhTc6kfyZi-1)

- [와이어프레임 및 디자인](https://www.figma.com/file/bpMg6sP7CTw6bPyUMLrl0k/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-3%EC%A1%B0?type=design&node-id=0%3A1&mode=design&t=9lyUahti1dNEm2lp-1)

- [리뉴얼 사이트](https://isabella-kim.github.io/KoreaCustomerEducationCenterRenewal/)
