
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Unit 4 Quiz",
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
                title: "TRUE or FALSE: A for loop can be rewritten as an equivalent while loop and vice versa",
                choicesOrder: "random",
                choices: [
                    "TRUE", "FALSE"
                ],
                correctAnswer: "TRUE"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "When is a loop considered an infinite loop?",
                choicesOrder: "random",
                choices: [
                    "when the Boolean expression evaluates to false initally", "when the Boolean expression always evaluates to true", "when the condition is satisfied after a certain point"
                ],
                correctAnswer: "when the Boolean expression always evaluates to true"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "Which part of the for loop header is executed first?",
                choicesOrder: "random",
                choices: [
                    "initialization", "Boolean expression", "increment/decrement", "body"
                ],
                correctAnswer: "initialization"
            }
        ]
    }
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});