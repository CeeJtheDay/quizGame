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

function clearText() {
  qDisplay.empty();
  aDisplay.empty();
}

function setTime() {
  setInterval(function () {
    secondsLeft--;
    timer.html(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(secondsLeft);
      showHS();
    };



  }, 1250)
};

function showHS() {
  var pastPlayerName = localStorage.getItem("name");
  var pastPlayerScore = localStorage.getItem("score");
  clearText();
  rwDisplay.empty();

  qDisplay.text("High Scores");
  aDisplay.append("<form><div class='form-group'><input type='text' class='form-control'placeholder='Enter your initials'></div></form>");
  aDisplay.append("<br> <button> Submit </button>");
  $("button").attr("id", "submit");
  rwDisplay.append("<ul id='hs-list'></ul>");
  $("ul").addClass("hsList");
  rwDisplay.append("<li class = highScore>" + "Player: " + pastPlayerName + " Score: " + pastPlayerScore + "</li>");
  if (qIndex === 4) {
    score = score + secondsLeft;
  } else {
    score = score - secondsLeft;
  }
  storeNames();
};

function storeNames(){
  $("#submit").on("click", function(event) {
    event.preventDefault();
    var playerName = $("input").val();
    console.log($("input").val());
    localStorage.setItem("name", JSON.stringify(playerName));
    localStorage.setItem("score", JSON.stringify(score));
    rwDisplay.append("<li class = highScore>" + "Player: "+ playerName + " Score: " + score + "</li");
  })
}

// ---- Start game ---
$("#start").on("click", function () {
  rwDisplay.empty();
  setTime();
  displayQuestion(qIndex);
});

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