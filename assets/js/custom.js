/*Custom JavaScript*/

$(function(){
  // Activate wow.js
  new WOW().init();

  if (location.pathname == "/" || location.pathname == "/gallery/") {
    $('.gallery a').simpleLightbox();
  } 

});
