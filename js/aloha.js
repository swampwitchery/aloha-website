$(function () {
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


  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
    const sEmail = $(".email").val();

  });
});

//email validation
//http://www.jquerybyexample.net/2011/04/validate-email-address-using-jquery.html

$(".submit").on("click", ".button", function (event) {
  event.preventDefault()
  const sEmail = $(".email-sub").val();
  event.preventDefault()

  if (validateEmail(sEmail)) {
    alert("Thanks for Subscribing!");
  } else {
    alert("Invalid Email");
  }
});

function validateEmail(sEmail) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  console.log(filter.test(sEmail));
  if (filter.test(sEmail) && $.trim(sEmail).length !== 0) {
    return true;
  } else {
    return false;
  }
}