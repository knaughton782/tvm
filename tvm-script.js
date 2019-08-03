$(document).ready(function () {

  // for anchor tags
  if (window.location.hash) {
    var slide7 = window.location.hash.substring(1);
    $("#slide7" + slide7).trigger('click');
  }
  /** continue/back BUTTON FUNCTIONALITY  **/

  /** HIDE ALL SLIDES EXCEPT CURRENT, starts with first slide **/

  // $('.allSlides .slide').each(function (e) {
  //   if (e != 0) {
  //     $(this).hide();
  //   }
  // });

  // for each click on the continue button, hide the current slide and show the next one
  $('.continue').click(function () {
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
  $('.back').click(function () {
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
  /** END Back / Continue Button Functionality ****************/

});

// future value calculation is FV = PV(1 + i)^time

function FV(principal, interest, time) {
  var answer = principal * Math.pow((1 + interest), time);
  return answer.toFixed(2);
}

function calc_FV() {

  var principal = parseFloat(document.getElementById('pvalue').value);
  principal.toFixed(2);
  console.log("principal = " + principal);

  var futureValue = document.getElementById('futureValue').value;

  var interest = parseFloat(document.getElementById('int').value);
  interest.toFixed(2);

  console.log("interest = " + interest);

  var time = document.getElementById('yrs').value;
  console.log("time = " + time);

  var ans = FV(principal, interest, time);

  document.getElementById('answer').innerHTML = "The future value is $" + ans;
}
