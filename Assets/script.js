// 1. create fixed timer L corner
    var grabTimer = $("#timer");
    // a. timer should count down from 75
    var secondsLeft = 75;

    function startTimer() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
          }
      
        }, 1250);
      };
        // - create click handler that starts the timer. 
    // b. it should run the entire time after the start button is clicked
        // - store time to local storage when answer is clicked.
    // c. game should stop when the timer hits zero

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