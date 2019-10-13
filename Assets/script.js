var fishQuestions = [
  {
    title: "How many kinds of pacific salmon are there??",
    choices: ["two", "three", "four", "five", "six"],
    answer: "six"
  },
  {
    title: "true or false: By weight, all of the cephalopods in the ocean weigh more than the entire human poulation",
    choices: ["true", "false"],
    answer: "true"
  },
  {
    title: "How long is the average lifespan of an octopus?",
    choices: ["1-2 years", "4-6 years", "8-10 years", "12-15 years"],
    answer: "1-2 years"
  },
  {
    title: "Approximately how many species of fish are there worldwide?",
    choices: ["9,000", "27,000", "56,000", "72,000"],
    answer: "27,000"
  },
  {
    title: "What is the largest species of fish?",
    choices: ["Whale Shark", "Giant Gaourami", "Blufin Tuna", "Blue Whale"],
    answer: "Whale Shark"
  },
];

var qIndex = 0;
var score = 0;
var secondsLeft = 75;
var questions = fishQuestions[qIndex];
var qDisplay = $("#queDisplay");
var aDisplay = $("#ansDisplay");
var rwDisplay = $("#rwDisplay");
var timer = $("#timer");


function startGame() {
  displayQuestion();
  displayAnswers();
  checkAnswer();
};

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    var startTime = $("#timer").html();
    timer.html(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
    }

  }, 1250)
};

function displayQuestion() {
  var curQuestion = questions.title;
  //presents question to user
  qDisplay.text(curQuestion);
};
//presents answers to user
// funtion to diplay answer buttons
function displayAnswers() {
  var curAnswers = questions.choices;
  $.each(curAnswers, function(i, answer){
    aDisplay.append("<button>" + answer + "</button");
    $("button").addClass("answer-button");
  })
};

function checkAnswer() {
  var answers = questions.choices;
  $(".answer-button").on("click", function () {
    $.each(answers, function(i, answer){
      if (answer === questions.answer) {
        answers.attr("correct", "true");
        // score + 5;
        // rwDisplay.text("Correct!");
      } else {
        answers.attr("correct", "false");
        // score - 5;
        // secondsLeft - 15;
        // rwDisplay.text("Nope!");
      }
    })
    var buttonCheck = $(this).correct.val();
    if (buttonCheck === "true") {
      score = 5;
      rwDisplay.text("Correct!");
    } else {
      score - 5;
      secondsLeft - 15;
      rwDisplay.text("Nope!");
    }
  })
};
    // for (i = 0; i < answers.length; i++) {
    //   if (answers[i] === questions.answer) {
    //     $(this).attr("correct", "true");
    //     // score + 5;
    //     // rwDisplay.text("Correct!");
    //   } else {
    //     $(this).attr("correct", "false");
    //     // score - 5;
    //     // secondsLeft - 15;
    //     // rwDisplay.text("Nope!");
    //   }
    //   // qIndex++;
    // }
      // var buttonCheck = $(this).correct.value();
      // if (buttonCheck === "true") {
      //   score = 5;
      //   rwDisplay.text("Correct!");
      // } else {
      //   score - 5;
      //   secondsLeft - 15;
      //   rwDisplay.text("Nope!");
      // }
  

  // for (i = 0; i < curAnswers, length; i++) {
  //   var buttons = $("<button>").text(curAnswers[i]);
  //   $("button").addClass("answer-button");
  //   buttons.append($(aDisplay));
  // }};

// -- Check Answer --
// $(".answer-button").on("click", function () {
//   for (j = 0; j < questions.choices.length; j++) {
//     var curAnswer = questions.choices[j];
//     if (curAnswer === questions.answer) {
//       score + 5;
//       rwDisplay.text("Correct!");
//     } else {
//       score - 5;
//       secondsLeft - 15;
//       rwDisplay.text("Nope!");
//     }
//     qIndex++;
//   }
// });




// ---- Start game ---
$("#start").on("click", function () {
  qDisplay.empty();
  aDisplay.empty();
  rwDisplay.empty();
  setTime();
  startGame();
  // 1.start Timer

  // -- Cycle Questions ---
  //     // 2.pick a card (loop)
});

    // -- Read question & choices --
        // 3.read the question
        // 4.read the answers
            // a. read all possible answers (loop)

        // -- Wait for choice --
        // 5.choose an answer (click handler)
        // $(".answer-button").on("click", function(){
        //   for (j = 0; j < questions.choices.length; j++) {

        //   }
        // })
        // -- Check Answer --
        // 6.is the answer right?
        // 7.if its right raise score 5pts
        // 8.if its wrong take 5 points away, or time away

    // -- Next Question --
    // 9.see step 2

// -- End Game --
// 10. show score and record name