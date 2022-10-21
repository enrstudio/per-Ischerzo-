$(document).ready(function(){

  var scary = function(){
    var context = new AudioContext();
    // One-liner to resume playback when user interacted with the page.
    context.resume().then(() => {
      document.getElementById("toxic").play();
    $('.scary').addClass('appear');
   });
  };

   $("#win-link")
   .hover(scary)
   .tap(scary)

});