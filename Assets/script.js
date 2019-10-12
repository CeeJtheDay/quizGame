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

    var Score = 0;
    var qDisplay = $("#queDisplay");
    var aDisplay = $("#ansDisplay");
    var rwDisplay = $("#rwDisplay");
    function createButton(){
         $("<button>");
    }

    // user arrives at web page
    // presented with iuntroduction and a start button.
    //  clicks start button
    $("#start").on("click", function startGame(){
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
        aDisplay.empty();
        rwDisplay.empty();
    // presents first question with answers
      fishQuestions.forEach(function(question){
          var curQuestion = question.title;
          var curAnswers = question.choices;
          var curCorrect = question.answer;
          qDisplay.text(curQuestion);
          var ansButton = curAnswers.forEach(createButton());
          aDisplay.append(ansButton);
          curAnswers.on("click", function qCounter(){
            for (i=0; i < fishQuestions.length; i++) {
                if (curCorrect) {
                    rwDisplay.text("Correct!");
                } else {
                    rwDisplay.text("Incorrect!");
                }
            }
          })
      });

   
    });
    
    // user chooses answer
    // check if that answer is correct or not
    // if wrong, time penalty
    // if correct, present next correction
