$(document).ready(() => {
  let activeIdx = 0;

  function initSlider() {
      let slides = $('.slide');
      slides.each((idx, domElement) => {
        const element = $(domElement);
        let isActiveElement = element.hasClass("active");
        element.attr(
            'style',
            `transition: transform 1000ms ease;
                     animation-duration: 1000ms`,
        );

        if(isActiveElement) {
          activeIdx = idx;
        } else {
          element.hide();
        }
      });

      $('.slider-prev').click(() => {
        changeSlide(false);
      });

      $('.slider-next').click(() => {
        changeSlide(true);
      });
  }

  function changeSlide(forward) {
    let slides = $('.slide');
    const numSlides = slides.length;
    activeIdx = (forward) ? (activeIdx + 1 < numSlides ? activeIdx + 1 : 0) : (activeIdx - 1 < 0 ? numSlides - 1 : activeIdx - 1);

    slides.each((idx, domElement) => {
      const element = $(domElement);
      if(idx === activeIdx) {
        element.addClass("active");
        element.show();
        element.addClass(forward ? "slideInLeft" : "slideInRight")
      } else {
        element.removeClass("active slideInLeft slideInRight");
        element.hide();
      }
    });
  }

  initSlider();
});
