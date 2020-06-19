$(document.body).ready(function () {
  $('.header-bottom__proposal__swipe__text').click(function (event) {
    var $link = $(this).attr("href");
    $('.header-bottom__slider').animate({
      scrollLeft: $('.header-bottom__slider').scrollLeft() + $($link).offset().left
    }, 1000);
      event.preventDefault();
  })
  $('.header-main__proposal2__swipe__text').click(function (event) {
    var $link = $(this).attr("href");
    $('.header-bottom__slider').animate({
      scrollLeft: $('.header-bottom__slider').scrollLeft() + $($link).offset().left
    }, 1000);
      event.preventDefault();
  })
  $('.header-bottom__proposal__swipe__text').click(function () {
    var activeId = $('.header-bottom__proposal__swipe__bullet--active').attr('id');
    $('.header-bottom__proposal__swipe__bullet').removeClass('header-bottom__proposal__swipe__bullet--active');
    if (activeId == 'leftBullet') {
      $('#rightBullet').addClass('header-bottom__proposal__swipe__bullet--active');
    }
  })
  $('.header-main__proposal2__swipe__text').click(function () {
    var activeId = $('.header-main__proposal2__swipe__bullet--active').attr('id');
    $('.header-main__proposal2__swipe__bullet').removeClass('header-main__proposal2__swipe__bullet--active');
    if (activeId == 'leftBullet1') {
      $('#rightBullet1').addClass('header-main__proposal2__swipe__bullet--active');
    }
  })
})