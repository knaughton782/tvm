$(document).ready(function() {

/****************** BACK / CONTINUE BUTTON FUNCTIONALITY ********************/

    // hide all slides except first slide
    $(".allSlides .slide").each(function(e) {
        if (e !=0) {
            $(this).hide();
        }
    });

    // for each click on the continue button, hide the current slide and show the next one
    $(".continueBtn").click(function() {
        if ($(".allSlides .slide:visible").next().length != 0) {
            $(".allSlides .slide:visible").next().show().prev().hide();
        } else {
            $(".allSlides .slide:visible").hide();
            $(".allSlides .slide:first").show();
        }
        return false;
    });

    // for each click on the back button, hide the current slide and show the previous one
    $(".backBtn").click(function() {
        if ($(".allSlides .slide:visible").prev().length !=0) {
            $(".allSlides .slide:visible").prev().show().next().hide();
        } else {
            $(".allSlides .slide:visible").hide();
            $(".allSlides .slide:last").show();
        }
        return false;
    });
    
/****************** END Back / Continue Button Functionality ********************/
    
        
    
    
    
    
    
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