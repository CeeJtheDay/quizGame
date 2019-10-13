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
var qDisplay = $("#queDisplay");
var aDisplay = $("#ansDisplay");
var rwDisplay = $("#rwDisplay");
var createButton = $("<button>");
var questions = fishQuestions[qIndex];



// ---- Start game ---
// 1.start Timer
function startTimer(){

}
// funtion to diplay answer buttons
function displayAnswers(){
  var curAnswers = questions.choices;
  for (i = 0; i < curAnswers.length; i++) {
    var button = createButton.text(curAnswers[i]);
    button.addClass("answer-button");
    aDisplay.append(button);
  }}
    // -- Cycle Questions ---
    // 2.pick a card (loop)
function displayQuestion (){
  var curQuestion = questions.title;
  //presents question to user
  qDisplay.text(curQuestion);
  //presents answers to user
  displayAnswers();
  // user chooses an answer
  $(".answer-button").on("click", function(){
     // -- Check Answer --
    for (j = 0; j < questions.choices.length; j++) {
      var curAnswer = questions.choices[j];
        
      if (curAnswer === questions.answer) {
        score + 5;
        rwDisplay.text("Correct!");
      } else {
        score - 5;
        // secondsLeft - 15;
        rwDisplay.text("Nope!");
      }
    }
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


};













// 1. create fixed timer L corner
    // var grabTimer = $("#timer");
    // // a. timer should count down from 75
    // var secondsLeft = 75;

    // function startTimer() {
    //     var timerInterval = setInterval(function() {
    //       secondsLeft--;
    //    // c. game should stop when the timer hits zero
    //       if(secondsLeft === 0) {
    //         clearInterval(timerInterval);
    //         timesUp();
    //       }
      
    //     }, 1250);
    //   };
    //     // - create click handler that starts the timer. 
    // // b. it should run the entire time after the start button is clicked
    //     // - store time to local storage when answer is clicked.
    //   function timesUp() {
    //       if(secdonsLeft === 0){
    //           alert( "Time's up! Game Over.");
    //       }
    //   }


// 2. create link to view highscores page
    // create score keeper
    // should add time remaining, and correct answers
    // store score and name to local storage

// 3. create text box with intro to quiz
    // for loop that presents question, answers, etc maybe by creating elements??

// 4. create button to start the quiz

// 5. create 5 questions with 4 answers each.
    // a. questions will be presented on the same page
    // b. create answers as buttons. 
    // c. alert whether an answer is correct or incorrect
    // d. create sound for correct and incorrect answers.

    // printinfo??

    // fish quiz


    // user arrives at web page
    // presented with iuntroduction and a start button.
    // //  clicks start button
    // $("#start").on("click", function startGame(){
        
    //     qDisplay.fishQuestions[qIndex].title);
    //     // var curCorrect = fishQuestions.answer;
    //     aDisplay.empty();
    //     rwDisplay.empty();
    // presents first question with answers

    // for (i = 0; i < fishQuestions.length; i++){
    //     var curQuestionCount = fishQuestions[i].questionCount;
    //     if (curQuestionCount === i + 1) {
    //         displayQuestion(fishQuestions[i]);
    //     }
    // }

    // function displayQuestion(){
    //     var curQuestion = fishQuestions.title;
    //     qDisplay.text(curQuestion);
    //     var answerButton = fishQuestions.forEach(answers.choices)
    //         for (var i = 0; i < answerButton.length; i++){
    //     var curButton = createButton.text(answerButton[i]);
    //         aDisplay.append(curButton);
    //     }};
    

    //     $("button").on("click", function corAnswer(){
    //         for (var j=0; j < fishQuestions.length; j++) {
    //             if (curCorrect) {
    //             rwDisplay.text("Correct!");
    //             } else {
    //             rwDisplay.text("Incorrect!");
    //             }
    //         }
        // })
  
    
    // // user chooses answer
    // // check if that answer is correct or not
    // // if wrong, time penalty
    // // if correct, present next correction
