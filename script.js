// Variables for questions and answers
var myQuestions = [
    {
        question: "What does HTML stand for?",
        answers: {
            a: 'Hyper Tracy Mush Langauge',
            b: 'Hyper Text Processor Langauge',
            c: 'Hyper Text Markup Langauge',
            d: 'Hyper Text Main Langauge'
    },
        correctAnswer: 'Hyper Text Markup Langauge'
    },
    {
        question: "What letters in a tag are used to define a list item (in a bulleted list)?",
        answers: {
            a: 'ul',
            b: 'u',
            c: 's',
            d: 'li'
    },
        correctAnswer: 'li'
    },
    {
        question: "What is the name of the object that allows you to perform mathematical tasks with the interpreter?",
        answers: {
            a: 'Solve',
            b: 'Count',
            c: 'Number',
            d: 'Math'
        },
        correctAnswer: 'Math'
    },
    {
        question: "In JavaScript, what element is used to store multiple values in a single variable?",
        answers: {
            a: 'Arrays',
            b: 'Functions',
            c: 'Strings',
            d: 'Variables'
        },
        correctAnswer: 'Arrays'
    },
    {
        question: "CSS stands for ____ Style Sheets.",
        answers: {
            a: 'Conceptual',
            b: 'Cascading',
            c: 'Curious',
            d: 'Clap-worthy'
        },
        correctAnswer: 'Cascading'
    }
  ];
  
  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var startBtn = document.getElementById('startBtn');
  var timer_seconds = document.getElementById('timer_seconds');
  var questionEl = document.getElementById('question');
  var currentQuestion = 0
  var currentOptions = 0
  var optionA = document.getElementById('a');
  var optionB = document.getElementById('b');
  var optionC = document.getElementById('c');
  var optionD = document.getElementById('d');
  
  function beginQuiz(){
    currentQuestion=0
    currentOptions=0
    startTimer()
      showNextQuestion()
  }

  function startTimer(){
    var timeRemaining = 120
    var interval = setInterval(function (){
        timeRemaining--;
        timer_seconds.textContent=timeRemaining
        if (timeRemaining<=0||currentQuestion>myQuestions.length){
            clearInterval(interval)
        }
    },1000)
  }

  function showNextQuestion(){
      if(currentQuestion >= myQuestions.length){
      }else{
          questionEl.textContent = myQuestions[currentQuestion].question
          optionA.textContent = myQuestions[currentQuestion].answers.a
          optionB.textContent = myQuestions[currentQuestion].answers.b
          optionC.textContent = myQuestions[currentQuestion].answers.c
          optionD.textContent = myQuestions[currentQuestion].answers.d
        }
        currentQuestion++
    }

  function handleAnswer(){
      if (this.textContent==myQuestions[currentQuestion-1].correctAnswer){
      }else{
      }
      showNextQuestion()
  }

//   const result = {userName: user, score: timeScore}

//   const savedScores = localStorage.getItem('score') || '[]' // get the score, or the initial value if empty
  
//   const highscores = [...JSON.parse(savedScores), result] // add the result
//     .sort((a, b) => b.score- a.score) // sort descending
//     .slice(0, 5) // take highest 5
  
//   localStorage.setItem('highscore', JSON.stringify(highscores)) // store the scores

  startBtn.addEventListener('click', beginQuiz)
  optionA.addEventListener('click', handleAnswer)
  optionB.addEventListener('click', handleAnswer)
  optionC.addEventListener('click', handleAnswer)
  optionD.addEventListener('click', handleAnswer)