// Variables for questions
var questions = [{
    question: "1. Commonly used data types DO NOT include _____;",
    choices: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: 2
}, {
    question: "2. The condition in an if/else statement is enclosed within _____;",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2
}, {
    question: "3. Arrays in JavaScript can be used to store _____;",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: 3
}, {
    question: "4. String values must be enclosed within _____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    correctAnswer: 2
}, {
    question: "5. A very useful tool used during development and debugging for printing content to the debugger is:;",
    choices: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: 3
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
