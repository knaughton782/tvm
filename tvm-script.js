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
// exercise 1 - this exercise is in lecture1.html
function FV(principal, interest, time) {
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
  var interest = parseFloat(document.getElementById('int').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs').value;
  var ans = FV(principal, interest, time);

  document.getElementById('answer').innerHTML = ans;
}
/* ****************** end slide 15 ******************* */


/* ************************************* */
/* ************************************* */

// future value calculation is FV = PV(1 + i)^time


// EXAMPLE *************
// function FV(principal, interest, time) {
//   // console.log(interest = "this");
//   if (principal == 100 && interest == .10 && time == 10) {
//     var answer = principal * Math.pow((1 + interest), time);
//     return "The future value is $" + answer.toFixed(2) + ". Good job!";
//   } else {
//     return answer = "Please check your variables and try again."
//   }
// }
// function calc_FV() {
//   var principal = parseFloat(document.getElementById('pvalue').value);
//   principal.toFixed(2);
//   console.log("principal = " + principal);
//   var futureValue = document.getElementById('futureValue').value;
//   var interest = parseFloat(document.getElementById('int').value);
//   interest.toFixed(2);
//   console.log("interest = " + interest);
//   var time = document.getElementById('yrs').value;
//   console.log("time = " + time);
//   var ans = FV(principal, interest, time);
//   document.getElementById('answer').innerHTML = ans;
// }



/* ************************************* */
/* ************************************* */
/* ****************** for EXERCISES PAGE ******************* */
/* ******** for exercise 2 *********** */
function ex_2(principal, interest, time) {
  if (principal == 2000 && interest == 0.08 && time == 15) {
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return `Please check the variables and try again.`;
  }
}
function exercise_2() {
  var principal = parseFloat(document.getElementById('pvalue-ex2').value);
  principal.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex2').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex2').value;
  var ans = ex_1(principal, interest, time);

  document.getElementById('answer-ex2').innerHTML = ans;
}
/* ******** end exercise 2 *********** */



/* ******** for exercise 3 *********** */
function ex_3(futureValue) {
  if (futureValue == 6344.34) {
    return `Correct! The future value is $6344.34.`;
  } else {
    console.log('no here');
    return `Please check your math and try again.`;
  }
}
function exercise_3() {
  var futureValue = parseFloat(document.getElementById('fvalue-ex3').value);
  futureValue.toFixed(2);
  var ans = ex_3(futureValue);

  document.getElementById('answer-ex3').innerHTML = ans;
}
/* ******** end exercise 3 *********** */



/* ******** for exercise 4 *********** */
function ex_4(principal, futureValue, interest, time) {
  if (futureValue == 1000 && interest == .12 && time == 20) {
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return answer = "Please check your variables and try again."
  }
}
function exercise_4() {
  var principal = parseFloat(document.getElementById('pvalue-ex4').value);
  principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex4').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex4').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex4').value;
  var ans = ex_4(principal, futureValue, interest, time);

  document.getElementById('answer-ex4').innerHTML = ans;
}
/* ******** end exercise 4 *********** */




/* ******** for exercise 5 *********** */
function ex_5(principal, futureValue, interest, time) {
  if (futureValue == 1000 && interest == .12 && time == 20) {
    var answer = principal * Math.pow((1 + interest), time);
    return `Your variables are correct!`;
  } else {
    return answer = "Please check your variables and try again."
  }
}
function exercise_5() {
  var principal = parseFloat(document.getElementById('pvalue-ex5').value);
  principal.toFixed(2);
  var futureValue = parseFloat(document.getElementById('fvalue-ex5').value);
  futureValue.toFixed(2);
  var interest = parseFloat(document.getElementById('int-ex5').value);
  interest.toFixed(2);
  var time = document.getElementById('yrs-ex5').value;
  var ans = ex_5(principal, futureValue, interest, time);

  document.getElementById('answer-ex5').innerHTML = ans;
}
/* ******** end exercise 4 *********** */