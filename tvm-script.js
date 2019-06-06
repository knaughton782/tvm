$(document).ready(function () {

  /** continue/back BUTTON FUNCTIONALITY  **/

  // hide all slides except first slide
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

  /**** slide 2 content switching functionality ***/
  var intro = $('#intro');
  var learningObj = $('#learningObj');
  var prereqs = $('#prereqs');
  var requirements = $('#requirements');

  //default
  intro.show().addClass('selected');
  learningObj.hide();
  prereqs.hide();
  requirements.hide();

  function addIntro() {
    intro.show().addClass('selected');
    learningObj.hide();
    prereqs.hide();
    requirements.hide();
  }
  $('#introBtn').click(addIntro);

  function addlearningObj() {
    intro.hide();
    learningObj.show().addClass('selected');
    prereqs.hide();
    requirements.hide();
  }
  $('#learningObjBtn').click(addlearningObj);

  function addPrereqs() {
    intro.hide();
    learningObj.hide();
    prereqs.show().addClass('selected');
    requirements.hide();
  }
  $('#prereqsBtn').click(addPrereqs);

  function addRequirements() {
    intro.hide();
    learningObj.hide();
    prereqs.hide();
    requirements.show().addClass('selected');
  }
  $('#reqsBtn').click(addRequirements);
  /**** end slide 2 content switching ******/

  /****** slide 6 content switching *****/
  var defaultCondition = $('#defaultCondition');
  var presentValue = $('#presentValue');
  var time = $('#time');
  var interest = $('#interest');

  defaultCondition.show();
  presentValue.hide();
  time.hide();
  interest.hide();

  function addPV() {
    defaultCondition.hide();
    presentValue.show();
    time.hide();
    interest.hide();
  }
  $('#presentValueBtn').click(addPV);

  function addTime() {
    defaultCondition.hide();
    presentValue.hide();
    time.show();
    interest.hide();
  }
  $('#timeBtn').click(addTime);

  function addInterest() {
    defaultCondition.hide();
    presentValue.hide();
    time.hide();
    interest.show();
  }
  $('#interestBtn').click(addInterest);

  /***** end slide 6 content switching ********/

  /****** slide 19, help slide 6 button/content switching *****/
  var principles = $('#principles');
  var pemdas = $('#pemdas');
  var dist = $('#dist');
  var foil = $('#foil');

  principles.show();
  pemdas.hide();
  dist.hide();
  foil.hide();

  function showPemdas() {
    principles.hide();
    pemdas.show();
    dist.hide();
    foil.hide();
  }
  $('#pemdasBtn').click(showPemdas);

  function showDist() {
    principles.hide();
    pemdas.hide();
    dist.show();
    foil.hide();
  }
  $('#distBtn').click(showDist);

  function showFoil() {
    principles.hide();
    pemdas.hide();
    dist.hide();
    foil.show();
  }
  $('#foilBtn').click(showFoil);

  function showPrinciples() {
    principles.show().addClass('selected');
    pemdas.hide();
    dist.hide();
    foil.hide();
  }
  $('#principlesBtn').click(showPrinciples);

  /***** end slide 19 content switching ********/



  $('.btn-group-left').on('click', '.btn', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });












}); // end document ready