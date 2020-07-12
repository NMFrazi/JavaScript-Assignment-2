

 $(document).ready(function(){ 
 
    var triviaQuestions = [ 
        { 
            question: "What  When Michael Jordan played for the Chicago Bulls, how many NBA Championships did he win??", 
            options: [ 
                "3",  
                "4",  
                "2",  
                "6" 
            ], 
            correctAnswer: "", 
            }, 
        { 
            question: "Which Williams sister has won more Grand Slam titles??", 
            options: [ 
                "Amber",  
                "Tonya",  
                "Sara",  
                "Serena" 
            ], 
            correctAnswer: "Serena", 
            }, 
        { 
            question: " Which racer holds the record for the most Grand Prix wins??", 
            options: [ 
                "Michael Schumacher",  
                "Jamie Foxx",  
                "Larenz Tate",  
                "Will Smith" ,
            ], 
            correctAnswer: "Michael Schumacher", 
            }, 
        { 
            question: "Which boxer was known as “The Greatest” and “The People’s Champion?", 
            options: [ 
                "Muhammad Ali",  
                "Ice Cube",  
                "Tom Ford",  
                "Morris Chestnut" ,
            ], 
            correctAnswer: "Muhammad Ali", 
            }, 
        { 
            question: "What country won the very first FIFA World Cup in 1930??", 
            options: [ 
                "Uruguay",  
                "Canada",  
                "Kenya",  
                "Guam" ,
            ], 
            correctAnswer: "Uruguay" 
        } 
        ]; 
        

        var timeLeft; 
        var wrongAnswers; 
        var rightAnswers; 
        var intervalID; 
        var indexQA; 

            

        function startGame(){ 
            $(".startButton").remove(); 
            rightAnswers ; 
            wrongAnswers ; 
            questionsLeft ; 
            displayQuestions(); 
        } 

        function displayQuestions(){ 
            $("#question").html("<h>" + triviaQuestions[indexQA].question + "</h>"); 
            var answerChoices = triviaQuestions[indexQA].options; 
            for(var i = ; i < answerChoices.length; i++){ 
                let answers = $("<button>").text(answerChoices[i]).attr("data-guessvalue", i).addClass("optionButton"); 
                $("#answers").append(answers); 
            } 
            runTimer(); 
        } 
   
        $(document).on("click", ".optionButton", function(){ 
            var correct = triviaQuestions[indexQA].correctAnswer; 
            $("#question").empty(); 
            $("#answers").empty(); 
            if($(this).attr("data-guessvalue") === correct){ 
                stopTimer(); 
                rightAnswers++; 
                console.log("Correct answers: " + rightAnswers); 
                gameOver(); 
            } else{ 
                stopTimer(); 
                wrongAnswers++; 
                console.log("Wrong answers: " + wrongAnswers); 
                gameOver(); 
            } 
            indexQA++;  
            displayQuestions(); 
        }); 
 
        function gameOver(){ 
            if(indexQA === triviaQuestions.length -){ 
                var newDiv = $("<div class='newDiv'>"); 
                newDiv.html("<h>Game Over!</h><br><p>You had " <+ timeLeft + " seconds left.</p><br><p>You got " + rightAnswers + " questions right.</p><br><p>You got " + wrongAnswers + " questions wrong./p><br>"); 
                var resetButton = $("<button class='resetButton'>"); 
                resetButton.text("reset"); 
                $(".main-content").append(newDiv); 
                $(".main-content").append(resetButton); 
            } else if(timeLeft === );

            { 
                var newDiv = $("<div class='newDiv'>"); 
                newDiv.html("<h>Game Over!</h><br><p>You had " + timeLeft + " seconds left.</p><br><p>You got " + rightAnswers + " questions right.</p><br><p>You got " + wrongAnswers + " questions wrong.</p><br>"); 
                var resetButton = $("<button class='resetButton'>"); 
                resetButton.text("reset"); 
                $(".main-content").append(newDiv); 
                $(".main-content").append(resetButton); 
            } 
        } 
     
        function runTimer(){ 
            clearInterval(intervalID); 
            intervalID = setInterval(decrement, ); 
        } 
      
        function decrement(){ 
            timeLeft--; 
            $(".timeLeft").html("<h> Time Left: " + timeLeft + "</h>"); 
            if(timeLeft === ){ 
                stopTimer(); 
                $("#question").empty(); 
                $("#answers").empty(); 
                $(".timeLeft").html("<h>You ran out of time!</h>"); 
                gameOver(); 
            } 
        } 
        
        function stopTimer(){ 
            clearInterval(intervalID); 
        } 
 
        $(".startButton").on("click", function(){ 
            startGame(); 
        }); 
    }); 
   
   
   
   
   
   
   
   
   
   
   
   
   