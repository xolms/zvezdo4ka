/**
 * Created by Степан on 28.08.2017.
 */

$('document').ready(function() {
  //Мобильное меню
  $('.burger').click(function(event) {
    /* Act on the event */
    event.preventDefault();
    $('.mobile-mnu').fadeToggle();
  });
  //Слайдер большой
  $('.slider-head').slick({
    dots: true,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<div class="button-right slider__nav_head "></div>',
    prevArrow: '<div class="button-left slider__nav_head"></div>'
  });
  //Слайдер последних товаров
  $('.slider-new').slick({
    slidesToShow: 3,
    dots: false,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });



  $('.form__input').hover(function() {
    $(this).parent().addClass('hover');
    /* Stuff to do when the mouse enters the element */
  }, function() {
    $(this).parent().removeClass('hover');
    /* Stuff to do when the mouse leaves the element */
  });
  $('.form__input').focus(function(event) {
    $(this).parent().addClass('focus');
  });
  $('.form__input').focusout(function(event) {
    $(this).parent().removeClass('focus');
  });


});
