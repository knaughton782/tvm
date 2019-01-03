$(document).ready(function() {

    var continueBtn = $("#continue");
    function chgSlides() {
        $("#slide1").hide();
        $("#slide2").show();

    }
    $(continueBtn).click(chgSlides);
    
    
    
    
    
    
    ////// slide 2 content switching functionality ////////////////////

    //TODO: refactor to shorter code with one button functionality rather than per button

    var intro = $("#intro");
    var learningObj = $("#learningObj");
    var prereqs = $("#prereqs");
    var requirements = $("#requirements");

        intro.show();
        learningObj.hide();
        prereqs.hide();
        requirements.hide();

    function addIntro(){
        intro.show();
        learningObj.hide();
        prereqs.hide();
        requirements.hide();
    }
    $("#introB").click(addIntro);

    function addlearningObj(){
        intro.hide();
        learningObj.show();
        prereqs.hide();
        requirements.hide();
    }
    $("#learningObjB").click(addlearningObj);

    function addPrereqs(){
        intro.hide();
        learningObj.hide();
        prereqs.show();
        requirements.hide();
    }
    $("#prereqsB").click(addPrereqs);

    function addRequirements(){
        intro.hide();
        learningObj.hide();
        prereqs.hide();
        requirements.show();
    }
    $("#reqsB").click(addRequirements);
/////////////////////////////////////////////////






});