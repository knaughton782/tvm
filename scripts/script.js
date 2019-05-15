$(document).ready(function() {
  //switchContent();

  /****************** slide 2 content switching functionality ********************/

  //TODO: refactor to shorter code with one button functionality rather than per button and then further with one function for content switching

  // default state of slide 2

  // function switchContent() {
  //     var intro = $("#intro");
  //     var learningObj = $("#learningObj");
  //     var prereqs = $("#prereqs");
  //     var requirements = $("#requirements");

  //     intro.show();
  //     learningObj.hide();
  //     prereqs.hide();
  //     requirements.hide();

  //     if ($("#introB").click()) {
  //         intro.show();
  //         learningObj.hide();
  //         prereqs.hide();
  //         requirements.hide();
  //     } else if ($("#learningObjB").click()) {
  //         intro.hide();
  //         learningObj.show();
  //         prereqs.hide();
  //         requirements.hide();
  //     } else if ($("#prereqsB").click()) {
  //         intro.hide();
  //         learningObj.hide();
  //         prereqs.show();
  //         requirements.hide();
  //     } else if ($("#reqsB").click()) {
  //         intro.hide();
  //         learningObj.hide();
  //         prereqs.hide();
  //         requirements.show();
  //     }
  //}

  /****************** slide 2 content switching functionality ********************/
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
  /////////////////////////////////////////////////

  /****************** end slide 2 content switching ********************/

  /****************** slide 6 content switching functionality ********************/
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

  /****************** end slide 6 content switching ********************/
});