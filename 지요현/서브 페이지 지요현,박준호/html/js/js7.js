// const slideContainer = document.querySelector('.slide_content .slides');
// const slides = Array.from(slideContainer.querySelectorAll('slides li'));
// const prevButton = document.querySelector('.slide_btn .prev');
// const nextButton = document.querySelector('.slide_btn .next');
// const startButton = document.querySelector('.slide_btn .start');
// const stopButton = document.querySelector('.slide_btn .stop');

// let currentIndex = 0;
// const slideWidth = 163; // 슬라이드 하나의 너비
// const slideCount = slides.length;
// const visibleSlides = 6; // 한 번에 보여지는 슬라이드 개수
// let intervalId;

// function showSlide() {
//   const startPosition = currentIndex;
//   const endPosition = Math.min(startPosition + visibleSlides, slideCount);

//   slideContainer.style.transform = `translateX(-${startPosition * slideWidth}px)`;
// }
// function showNextSlide() {
//   currentIndex++;
//   if (currentIndex >= slideCount - visibleSlides + 1) {
//     currentIndex = 0;
//   }
//   showSlide();
// }
// function showPreviousSlide() {
//   currentIndex--;
//   if (currentIndex < 0) {
//     currentIndex = slideCount - visibleSlides;
//   }
//   showSlide();
// }

// function startAutoSlide() {
//   intervalId = setInterval(showNextSlide, 2000);
//   startButton.style.display = 'none';
//   stopButton.style.display = 'inline-block';
// }

// function stopAutoSlide() {
//   clearInterval(intervalId);
//   startButton.style.display = 'inline-block';
//   stopButton.style.display = 'none';
// }

// prevButton.addEventListener('click', showPreviousSlide);
// nextButton.addEventListener('click', showNextSlide);
// start

var slides = document.querySelector('.slides'),
    slide = document.querySelectorAll('.slides li'),
    currentIndex = 0,
    slideCount = slide.length,
    slideWidth = 160,
    slideMargin = 45,
    prevBtn = document.querySelector('.prev'),
    nextBtn = document.querySelector('.next');
// 복사본을 만드는과정
    makeClone();

    function makeClone(){
      for(var i = 0; i<slideCount; i++){
        //a.cloneNode(), a.cloneNode(true)
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.appendChild(b)
        slides.appendChild(cloneSlide);
      }
      for(var i = slideCount -1; i>=0; i--){
        var cloneSlide = slide[i].cloneNode(true);
        cloneSlide.classList.add('clone');
        // a.prepend(b)
        slides.prepend(cloneSlide);
      }
      // updateWidth();//width값을 새로 지정해줌
      setInitialPos();
      setTimeout(function(){
        slides.classList.add('animated');
      },100);
      slides.classList.add('animated');
    }
//width값을 새로 지정해줌
    // function updateWidth() {
    //    var currentSlides = document.querySelectorAll('.slides li');
    //    var newSlideCount  = currentSlides.length;

    //    var newWidth = (slideWidth + slideMargin)*newSlideCount - slideMargin + 'px';
    //    slides.style.width = newWidth;
    // }
    function setInitialPos(){
      var initialTranslateValue = -(slideWidth + slideMargin)*slideCount;
      //slides {transform:translateX(-1000px);}
      slides.style.transform= 'translateX(' + initialTranslateValue+'px)';
    }
    
    nextBtn.addEventListener('click',function(){
      moveSlide(currentIndex + 1);
    });
    prevBtn.addEventListener('click',function(){
      moveSlide(currentIndex - 1);
    });

    function moveSlide(num){
      slides.style.left = -num  * (slideWidth + slideMargin) + 'px';
      currentIndex = num;
      console.log(currentIndex, slideCount || currentIndex == -slideCount);

      if(currentIndex == slideCount){
        setTimeout (function(){
          slides.classList.remove('animated');
          slides.style.left = '0px';
          currentIndex = 0;
        },500);
        setTimeout(function(){
          slides.classList.add('animated');
        },600);
    }
  }
  var timer = undefined;

  function autoSlide(){
    if(timer == undefined){
      timer = setInterval(function(){
        moveSlide(currentIndex + 1);
      },3000);
    }
  }
  autoSlide();
  function stopSlide(){
    clearInterval(timer);
    console.log(timer);
    timer = undefined;
  }
  slides.addEventListener('mouseenter', function(){
    stopSlide();
  });
  slides.addEventListener('mouseleave', function(){
    autoSlide();
  });