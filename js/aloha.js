$(function() {
$('.product-section').flickity({
    draggable: true,
    freeScroll: true,
    prevNextButtons: false,
    cellAlign: 'left',
    contain: true,
  });


  /* 
  * for smooth scrolling 
  * @source: https://css-tricks.com/smooth-scrolling-accessibility/
  */


    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

