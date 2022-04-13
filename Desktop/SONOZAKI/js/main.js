"use strict";

// スクロールヘッダー固定
$(function(){
  let navPos =$(".news").offset().top;

  $(window).scroll(function(){
    if($(window).scrollTop() > navPos && !$(".header").hasClass('open-menu')){
      $(".header").addClass('active');
      $(".header.active").slideDown(600);
      $(".header-link").addClass('active')
      $(".header-img").css('display','none');
      $(".header-img-bl").css('display','block');
      $(".header-humburger").children().css('background','#000');
    }else{
      $(".header").removeClass('active');
      $(".header-link").removeClass('active');
      $(".header-img-bl").css('display','none');
      $(".header-img").css('display','block');
      $(".header-humburger").children().css('background','#fff');
    }
  });
});

// ハンバーガーメニュー
// sp-header
{
  $(function () {
    $(".header-sp").click(function () {
      $(this).toggleClass("close");
      $(".header").toggleClass("open-menu");
      $(".sp-menu").toggleClass("open-menu");
      $(".header-humburger").children().css('background','#fff');
      $(".header-img-bl").css('display','none');
      $(".header-img").css('display','block');
    });
  });
}
{
$(function() {
  $(".sp-menu a").click(function(){
    $(".sp-menu").removeClass("open-menu");
    // $(".header").removeClass("open-menu");
    $(".header").removeClass("open-menu");
    $(".header-sp").removeClass("close");
  });
});
}

// ローディングアニメーション
{
  window.onload = function() {
    const spinner = document.getElementById('loading-animation');
    spinner.classList.add('loaded');
  }
}

// スムーススクロール
{
  $(function(){
    $(".header-item a, .footer-item a").click(function(){
      var target = $($(this).attr("href")).offset().top;
      target -= 140;
      $("body,html").animate({scrollTop:target},300,'swing');
      return false;
    });
  });
}

// aos
{
  AOS.init({
    duration: 800,
    once:true,
  });
}
