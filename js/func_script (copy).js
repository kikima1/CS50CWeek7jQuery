

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