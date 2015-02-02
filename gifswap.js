	//script to restart the animation
    $(function(){
    var image = new Image();
       image.src='https://s3.amazonaws.com/gifs-seangreene/future-home-design-animation-final.gif';
     $('#home-image').click(function(){
       $(this).attr('src',image.src);
     }); 

 	});

    $(function(){
    var image = new Image();
       image.src='https://s3.amazonaws.com/gifs-seangreene/future-health-animation-final.gif';
     $('#health-image').click(function(){
       $(this).attr('src',image.src);
     }); 

 	});

    $(function(){
    var image = new Image();
       image.src='https://s3.amazonaws.com/gifs-seangreene/future-food-animation-2.gif';
     $('#food-image').click(function(){
       $(this).attr('src',image.src);
     }); 

 	});
