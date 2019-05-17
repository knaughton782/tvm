$(document).ready(function() {
  /************* BACK / CONTINUE BUTTON FUNCTIONALITY / Page 1 ***************/

  //hide all slides except first slide
  //UNCOMMENT THIS SECTION TO DISPLAY SLIDES
  // $('.allSlides .slide').each(function(e) {
  //   if (e != 0) {
  //     $(this).hide();
  //   }
  // });

  // for each click on the continue button, hide the current slide and show the next one
  $('.continueBtn').click(function() {
    if ($('.allSlides .slide:visible').next().length != 0) {
      $('.allSlides .slide:visible')
        .next()
        .show()
        .prev()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:first').show();
    }
    return false;
  });

  // for each click on the back button, hide the current slide and show the previous one
  $('.backBtn').click(function() {
    if ($('.allSlides .slide:visible').prev().length != 0) {
      $('.allSlides .slide:visible')
        .prev()
        .show()
        .next()
        .hide();
    } else {
      $('.allSlides .slide:visible').hide();
      $('.allSlides .slide:last').show();
    }
    return false;
  });
  /************ END Back / Continue Button Functionality ****************/

  /********* BACK / CONTINUE BUTTON FUNCTIONALITY / Page 2 ***********/

  //hide all slides except first slide
  // $(".allSlidesPage2 .slide").each(function(e) {
  //     if (e !=0) {
  //         $(this).hide();
  //     }
  // });

  // for each click on the continue button, hide the current slide and show the next one
  $('.continueBtn').click(function() {
    if ($('.allSlidesPage2 .slide:visible').next().length != 0) {
      $('.allSlidesPage2 .slide:visible')
        .next()
        .show()
        .prev()
        .hide();
    } else {
      $('.allSlidesPage2 .slide:visible').hide();
      $('.allSlidesPage2 .slide:first').show();
    }
    return false;
  });

  // for each click on the back button, hide the current slide and show the previous one
  $('.backBtn').click(function() {
    if ($('.allSlidesPage2 .slide:visible').prev().length != 0) {
      $('.allSlidesPage2 .slide:visible')
        .prev()
        .show()
        .next()
        .hide();
    } else {
      $('.allSlidesPage2 .slide:visible').hide();
      $('.allSlidesPage2 .slide:last').show();
    }
    return false;
  });
  /********** END Back / Continue Button Functionality *************/
});
