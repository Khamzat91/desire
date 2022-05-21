$(function () {
  $('.header__btn').on('click', function () {
    $('.rightside__menu').removeClass('rightside__menu--close')
  });
  $('.rightside__menu-close').on('click', function () {
    $('.rightside__menu').addClass('rightside__menu--close')
  });
  $('.header__btn-menu').on('click', function () {
    $('.menu').toggleClass('menu--open')
  });

  if($(window).width() < 651){
    $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
  }
    $('.top__slider').slick({
      dots: true,
      arrows: false,
      fade: true,
      autoplay: true
    });
  $('.contact__slider').slick({
    slidesToShow: 10,
    slidesToScroll: 10,
    dots: true,
    arrows: false,
    responsive:[
      {
        breakpoint: 1700,
        settings:{
          slidesToShow: 8,
          slidesToScroll: 8,
        }
      },
      {
        breakpoint: 1511,
        settings:{
          slidesToShow: 6,
          slidesToScroll: 6,
        }
      },
      {
        breakpoint: 1201,
        settings:{
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 841,
        settings:{
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 551,
        settings:{
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 376,
        settings:{
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });
  $('.article-slider__box').slick({
    prevArrow: '<button type="button" class="article-slider-arrow article-slider-arrowleft"><img' +
      ' src="images/arrow-slide-left.svg" alt="arrow left"></button>',
    nextArrow: '<button type="button" class="article-slider-arrow article-slider-arrowright"><img' +
      ' src="images/arrow-slide-right.svg" alt="arrow right"></button>'
  });
  var mixer = mixitup('.gallery__inner', {
    load: {
      filter: '.living'
    }
  });

})