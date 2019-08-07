$(document).ready(function () {


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

/* ****************** for slide 15 on lecture1 ******************* */
function FV(principal, interest, time) {
  // console.log(interest = "this");
  if (principal == 100 && interest == .10 && time == 10) {
    var answer = principal * Math.pow((1 + interest), time);
    return "The future value is $" + answer.toFixed(2) + ". Good job!";
  } else {
    return answer = "Please check your variables and try again."
  }
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

  document.getElementById('answer').innerHTML = ans;
}
/* ****************** end slide 15 ******************* */



/* ****************** for EXERCISES ******************* */
/* ******** for exercise 1 *********** */
function ex_1(principal, interest, time) {
  if (principal == 2000 && interest == 0.08 && time == 15) {
    // if (true) {
    console.log('here');
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!<br>The future value is $ ${answer.toFixed(2)}`;
  } else {
    console.log('no here');
    return `Please check the variables and try again.`;
  }
}

function exercise_1() {
  var principal = parseFloat(document.getElementById('pvalue-ex1').value);
  principal.toFixed(2);
  console.log("principal = " + principal);

  var futureValue = document.getElementById('fvalue-ex1').value;

  var interest = parseFloat(document.getElementById('int-ex1').value);
  interest.toFixed(2);
  console.log("interest = " + interest);

  var time = document.getElementById('yrs-ex1').value;
  console.log("time = " + time);

  var ans = ex_1(principal, interest, time);

  document.getElementById('answer-ex1').innerHTML = ans;
}
/* ******** end exercise 1 *********** */


/* ******** for exercise 2 *********** */
function ex_2(principal, futureValue, interest, time) {
  if (true) {
    // if (true) {
    console.log('here');
    var answer = principal * Math.pow((1 + interest), time);
    return "The variables are correct, and the future value is $" + answer.toFixed(2) + ". Good job!";
  } else {
    console.log('no here');
    return `Please check the variables and try again.`;
  }
}

function exercise_2() {
  var principal = parseFloat(document.getElementById('pvalue-ex1').value);
  principal.toFixed(2);
  console.log("principal = " + principal);

  var futureValue = document.getElementById('fvalue-ex1').value;

  var interest = parseFloat(document.getElementById('int-ex1').value);
  interest.toFixed(2);
  console.log("interest = " + interest);

  var time = document.getElementById('yrs-ex1').value;
  console.log("time = " + time);

  var ans = ex_1(principal, futureValue, interest, time);

  document.getElementById('answer-ex1').innerHTML = ans;
}
/* ******** end exercise 2 *********** */