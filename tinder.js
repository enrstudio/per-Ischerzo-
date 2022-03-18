

$(document).ready(function(){

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(400).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
          // alert("IT'S MATCH!");
          $( "body" ).css( "margin", "0" );
          $( ".match" ).css( "display", "flex" ).delay(1000).fadeIn();

          var context = new AudioContext();
          // One-liner to resume playback when user interacted with the page.
          context.resume().then(() => {
            document.getElementById("toxic").play();
          });


          // $( ".match" ).addClass( "appear");
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(400).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">bleah!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('Hai perso una grande occasione!');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});