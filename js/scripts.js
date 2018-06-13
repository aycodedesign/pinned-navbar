// alert('You linked to me.');

$(document).ready(function() {

  /*-------------------------------------
  | Animating The Scroll
  -------------------------------------*/
  $('div.branding nav a').click(function(event) {

    // 1. kill the default bahavior
    event.preventDefault();
    // 2. figure out which section to animate to
    var offset = 146;
    //this variable adjusts WHERE clickscroll stops
    var whichSect = $(this).attr('href');
    // 3. animate to section

    // https://stackoverflow.com/questions/832860/how-to-scroll-the-window-using-jquery-scrollto-function
    $('html, body').animate({
      scrollTop: $(whichSect).offset().top - offset
    }, 1500);
  });

  //determines how far down the page navbar sticks
  $(window).scroll(function() {
    var howFar = $(window).scrollTop();
    //console.log(howFar);

    if (howFar >= 400) {
      $('body').addClass('pinned');
      // console.log('pinned');
    } else {
      {
        $('body').removeClass('pinned');
        // console.log('unpinned');
      }
    }
  });

});