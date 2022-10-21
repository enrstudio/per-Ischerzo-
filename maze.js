$(document).ready(function(){

   $("#win-link").hover(function(){
    $('.scary').addClass('appear');
    // $('.buddy').find('.status').remove();
    var context = new AudioContext();
    // One-liner to resume playback when user interacted with the page.
    context.resume().then(() => {
      document.getElementById("toxic").play();
    });
  });

});