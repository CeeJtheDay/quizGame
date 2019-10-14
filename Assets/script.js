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
var qDisplay = $("#queDisplay");
var aDisplay = $("#ansDisplay");
var rwDisplay = $("#rwDisplay");
var timer = $("#timer");

function displayQuestion(x) {
  var curQuestion = fishQuestions[x].title;
  clearText();
  qDisplay.text(curQuestion);
  displayAnswers();

  function displayAnswers() {
    var curAnswers = fishQuestions[x].choices;

    $.each(curAnswers, function (i, answer) {
      aDisplay.append("<button>" + answer + "</button");
      $("button").addClass("answer-button ");
    })
    checkAnswer();

    function checkAnswer() {
      var answer = fishQuestions[x].answer;
      $(".answer-button").on("click", function () {
        var userPick = event.target.textContent;
        console.log(userPick);
        if (userPick === answer) {
          clearText();
          score = score + 5;
          rwDisplay.text("Correct!");
        } else {
          clearText();
          score = score - 5;
          secondsLeft = secondsLeft - 15;
          rwDisplay.text("Nope!");
        }
        if (qIndex < 4) {
          qIndex++;
          console.log(qIndex);
          console.log(userPick);
          console.log(score);
          return displayQuestion(qIndex);
        } else {
          showHS();
        }
      });
    };
  };
};

function clearText() {
  qDisplay.empty();
  aDisplay.empty();
}

function setTime() {
   var startTime = setInterval(function () {
    secondsLeft--;
    timer.html(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(startTime);
      showHS();
    };



  }, 1250)
};

function showHS() {
  clearText();
  rwDisplay.empty();
  qDisplay.text("High Scores");
  aDisplay.append("<p> Enter your initials </p>");
  $("p").addClass("inputHeader")
  aDisplay.append("<input></input>");
  $("input").addClass("hsInput");
  if (qIndex === 4) {
    score = score + secondsLeft;
  } else {
    score = score - secondsLeft;
  }
};

// ---- Start game ---
$("#start").on("click", function () {
  rwDisplay.empty();
  // 1.start Timer
  setTime();
  // -- Cycle Questions ---
  //     // 2.pick a card
  // -- Read question & choices --
  // 3.read the question
  //presents question to user
  // 4.read the answers
  // a. read all possible answers (loop)
  // -- Check Answer --
  // 5.choose an answer (click handler)
  // -- Wait for choice --
  // 6.is the answer right?
  // 7.if its right raise score 5pts
  // 8.if its wrong take 5 points away, or time away
  displayQuestion(qIndex);
});
    // -- Next Question --
    // 9.see step 2
// -- End Game --
// 10. show score and record name