//////////////
      new Swiper(".mySwiper", {
        //slidesPerView: 1.5, /*количество слайдов для показа*/
        //watchOverflow: true, /*отключает функционал, если слайдов меньше*/
        spaceBetween: 30,
        slidesPerView: "auto", /*ширина слайдера по ширине контента*/
        loop: true,
        centeredSlides: true,
        grabCursor: true, /*курсор в виде руки*/
        slideToClickedSlide: true, /*Переключение при клике на слайд*/
        navigation: { /*объект управления, навигация с помощью стрелок*/
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        // pagination:{ /*полоса отображающая прогресс просмотра слайдов*/
        //   el: ".swiper-pagination",
        //   type: "progressbar"
        // },
        // keyboard: { перелистывае слайдов с помощью стрелок на клавиатуре, только когда слайдер находится в видимой части страницы
        //   onlyInViewport: true,
        // },
        mousewheel: { /*перелистывание с помощью колеса мыши*/
          // eventsTarget: ".image-slider"
        },
        //autoHeight: true, /*высота слайдера подстраивается под высоту контента (слайда)*/
        // centeredSlides: true,
      });

      const menuBtn = document.querySelector(".menu_button");
      const menu = document.querySelector(".navbar_panel");
      const menuCloseBtn = document.querySelector(".close_menu");


      menuBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
      }); /*добавить обработчик событий*/

      menuCloseBtn.addEventListener("click", () => {
        menu.classList.toggle("is-open");
      });