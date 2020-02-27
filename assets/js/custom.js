/*Custom JavaScript*/

$(function(){
  // Activate wow.js
  new WOW().init();

  // var twoDaysFromNow = (new Date().getTime() / 1000) + (86400 * 2) + 1;

  // // Count Down
  // var flipdown = new FlipDown(twoDaysFromNow, { theme: 'light' })
  //   .start()
  //   .ifEnded(() => {
  //     console.log('The countdown has ended!');
  //   });


  var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
  $('#nurturing-projects').animateNumber(
    {
      number: 21,
      color: '#fff',
      numberStep: comma_separator_number_step
    },
    {
      easing: 'swing',
      duration: 1500
    }
  )
  $('#nearly-complete-projects').animateNumber(
    {
      number: 5,
      color: '#ddd',
      numberStep: comma_separator_number_step
    },
    {
      easing: 'swing',
      duration: 1000
    }
  )

  if (location.pathname == "/" || location.pathname == "/gallery/") {
    $('.gallery a').simpleLightbox();
  } 

  if (location.pathname == "/") {
    var typed = new Typed(".typed", {
      strings: ["is with you.", "goal is to develop Nepal economically."],
      typeSpeed: 40,
      startDelay: 500,
      backSpeed: 50
    });
  }
});

