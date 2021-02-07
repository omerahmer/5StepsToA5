
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Unit 1 Quiz",
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
                title: "What is an Object?",
                choicesOrder: "random",
                choices: [
                    "a blueprint programmers can use as a starting point they can then modify", "a modified instance of a class", "a set of code that executes an operation on data", "a representation of a fixed value"
                ],
                correctAnswer: "a modified instance of a class"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "All of the following are types of primitive variables EXCEPT:",
                choicesOrder: "random",
                choices: [
                    "int", "double", "boolean", "String"
                ],
                correctAnswer: "String"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "What is widening?",
                choicesOrder: "random",
                choices: [
                    "converting from a smaller data type (int) to a larger data type (double)", "converted from a larger data type (double) to a smaller data type (int)", "converting from one data type to another, such as from a double to an int"
                ],
                correctAnswer: "converting from a smaller data type (int) to a larger data type (double)"
            }
        ]
    }
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});