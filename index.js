var $item = $('.carousel-item');
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight);
$item.addClass('full-screen');

$('.carousel img').each(function () {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image': 'url(' + $src + ')',
    'background-color': $color
  });
  $(this).remove();
});

$(window).on('resize', function () {
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 3000,
  pause: "false"
});

$(".new").mouseover(function(){
  $(this).css(
    "box-shadow", "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
  )
  $(".pic").mouseover(function(){
    $(this).css("opacity","0.5px")
    });
  });
  
  $(".new").mouseout(function(){
    $(this).css(
      "box-shadow", "0px"
    )
    $(".pic").mouseover(function(){
      $(this).css("opacity","1px")
      });
    });
    
