

 let rando= Math.floor(Math.random() * 6) + 1;
let newClass = "selector"+ rando;
console.log(newClass)
$('#1').removeClass() .addClass(newClass);

 
        

        $(function() {
            // initialize the plugin
            // and then specify the animation type:
            $('.selector1').animatedHeadline({
                animationType: 'rotate-1'
            });
            $('.selector2').animatedHeadline({
                animationType: 'scale'
            });
          
            $('.selector3').animatedHeadline({
                animationType: 'loading-bar'
            });
            $('.selector4').animatedHeadline({
                animationType: 'rotate-3'
            });
            $('.selector5').animatedHeadline({
                animationType: 'rotate-2'
            });
             $('.selector6').animatedHeadline({
                animationType: 'type'
            });
              $('.selector7').animatedHeadline({
                animationType: 'clip'
            });
        })

//glac.js

 var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


//Slider
$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});