  $(document).ready()

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
      answer: "Whae Shark"
    },
];

var qIndex = 0;
var Score = 0;
var secondsLeft = 75;
var questions = fishQuestions[qIndex];
var qDisplay = $("#queDisplay");
var aDisplay = $("#ansDisplay");
var rwDisplay = $("#rwDisplay");
var createButton = $("<button>");
var timer = $("#timer");

function startGame() {
  setTime();
  displayQuestion();
  displayAnswers();

}

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    var startTime = $("#timer").hjtml();
    timer.html(startTime + secondsLeft);

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1250)
};

function displayQuestion (){
  var curQuestion = questions.title;
  //presents question to user
  qDisplay.text(curQuestion);
};
//presents answers to user
    // funtion to diplay answer buttons
function displayAnswers(){
  var curAnswers = questions.choices;
  for (i = 0; i < curAnswers.length; i++) {
    var button = createButton.text(curAnswers[i]);
    button.addClass("answer-button");
    aDisplay.append(button);
    // -- Check Answer --
    $(".answer-button").on("click", function(){
      for (j = 0; j < questions.choices.length; j++) {
       var curAnswer = questions.choices[j];
         
       if (curAnswer === questions.answer) {
         score + 5;
         rwDisplay.text("Correct!");
       } else {
         score - 5;
         secondsLeft - 15;
         rwDisplay.text("Nope!");
       }
       qIndex++;
      }
    });
  }
};



 // ---- Start game ---
 $("#start").on("click", function () {
  startGame();
// 1.start Timer
  setTime();
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