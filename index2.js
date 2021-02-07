
Survey
.StylesManager
.applyTheme("modern");

var json = {
title: "Unit 2 Quiz",
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
                title: "What is an advantage of Object Oriented Programming?",
                choicesOrder: "random",
                choices: [
                    "simple and not complex", "reduces rewrites an easy to reuse existing code", "uses less memory"
                ],
                correctAnswer: "reduces rewrites an easy to reuse existing code"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "What is a constructor?",
                choicesOrder: "random",
                choices: [
                    "method for creating an object of a class", "design of object", "any type of data that you can manage", "the list of variables passed to a constructor or method and used in its implementation"
                ],
                correctAnswer: "method for creating an object of a class"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "What is a characteristic of a static method?",
                choicesOrder: "random",
                choices: [
                    "must be called through objects of the class", "does not need an instantiation of an object"
                ],
                correctAnswer: "does not need an instantiation of an object"
            }
        ]
    }, {
        questions: [
            {
                type: "radiogroup",
                title: "What does null mean?",
                choicesOrder: "random",
                choices: [
                    "a placeholder for a reference variable that does not yet have an object", "nothing is returned from a method, nor will anything ever be returned"
                ],
                correctAnswer: "a placeholder for a reference variable that does not yet have an object"
            }
        ]
    }
],
completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

$("#surveyElement").Survey({model: survey});