
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Unit 3 Quiz",
showProgressBar: "bottom",
showTimerPanel: "top",

firstPageIsStarted: true,
startSurveyText: "Start Quiz",
pages: [
    {
        questions: [
            {
                type: "html",
                html: "Click on the correct multiple choice answer"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "For which values of a and b does ((a == b) && (a <= b)) evaluate to true?",
                choicesOrder: "random",
                choices: [
                    "a=7; b=6", "a=5; b=5", "a=7; b=0", "a=2; b=8"
                ],
                correctAnswer: "a=5; b=5"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "When does a || b evaluate to true?",
                choicesOrder: "random",
                choices: [
                    "when either a or b is true", "when both a and b are true", "when a and b are false"
                ],
                correctAnswer: "when either a or b is true"
            }
        ]
    }, 
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});