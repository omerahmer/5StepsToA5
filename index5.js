
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Unit 5 Quiz",
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
                title: "What is the term for attributes of objects?",
                choicesOrder: "random",
                choices: [
                    "instance variables", "constructors", "mutator methods", "accessor methods"
                ],
                correctAnswer: "instance variables"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "TRUE OR FALSE: Private classes and variables can be accessed anywhere in the program",
                choicesOrder: "random",
                choices: [
                    "TRUE", "FALSE"
                ],
                correctAnswer: "FALSE"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "What does a constructor do?",
                choicesOrder: "random",
                choices: [
                    "set the initial state of the instance variables", "wraps the data and code that acts on the data in one unit", "returns a value when called upon"
                ],
                correctAnswer: "set the initial state of the instance variables"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "Accessor and Mutator methods both must be ___",
                choicesOrder: "random",
                choices: [
                    "public", "private"
                ],
                correctAnswer: "public"
            }
        ]
    }
    
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});