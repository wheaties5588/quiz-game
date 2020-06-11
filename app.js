document.addEventListener("DOMContentLoaded", () => {
   
    console.log("Yer a wizard, Harry...");

    // Create "nav" div that will house the link to the high scores page and the timer
    // And also include the page title
    function createTopNav() {
        var header = document.createElement("header");
        var topNav = document.createElement("nav");
        var brand = document.createElement("a");
        var navList = document.createElement("ul");
        var navBarCol = document.createElement("div");
        var navLinks = {
            //topScores: {
            //    name: "High Scores",
            //    link: "./highscores.html",
            //},
            gitHub: {
                name: "Creator GitHub",
                link: "https://www.github.com/wheaties5588",
                target: "_blank"
            }
        }

        header.id = "header";

        topNav.id = "topNav";
        topNav.className = "navbar navbar-exd-lg navbar-dark nav-back";

        brand.className = "navbar-brand";
        brand.setAttribute("href", "./index.html");
        brand.innerText = "Harry Potter Trivia";

        navBarCol.className = "navbar-nav";
        navBarCol.id = "navbar-nav";

        navList.id = "navList";
        navList.className = "navbar-nav";

        for (i = 0; i < Object.values(navLinks).length; i++) {
            var li = document.createElement("li");
            var navA = document.createElement("a");
            li.className = "nav-item";
            navA.className = "nav-link";
            navA.setAttribute("href", Object.values(navLinks)[i].link);
            navA.innerText = Object.values(navLinks)[i].name;

            if (Object.values(navLinks)[i].hasOwnProperty("target")) {
                navA.setAttribute("target", Object.values(navLinks)[i].target);
            }

            li.appendChild(navA);
            navList.appendChild(li);
        }

        document.body.appendChild(header);
        navBarCol.appendChild(navList);
        header.appendChild(topNav);
        topNav.appendChild(brand);
        topNav.appendChild(navBarCol);

        
    }

    //Create main
    function createMain() {
        var mainDiv = document.createElement("main");
        mainDiv.id = "mainContainer";
        mainDiv.className = "container-md";
        document.body.appendChild(mainDiv);
    }


    //Create timer div
    function timerDiv() {
        var div = document.createElement("div");
        var p = document.createElement("p");
        var span = document.createElement("span");
        var mainDiv = document.getElementById("mainContainer");

        div.className = "timerDiv";
        div.id = "timerDiv";

        p.className = "timerText";
        p.id = "timerText";
        p.innerText = "Timer: ";

        span.className = "timerCount";
        span.id = "timerCount";
        span.innerText = 0;

        p.appendChild(span);
        div.appendChild(p);


        mainDiv.appendChild(div);
    } 

    // Create div that will house the game
    function createQuizDiv() {
        var mainDiv = document.getElementById("mainContainer");
        var div = document.createElement("div");
        var startDiv = document.createElement("div");
        var img = document.createElement("img");
        var btn = document.createElement("button");

        div.id = "quizDiv";
        div.className = "quizDiv";
        img.id = "introImg";
        img.className = "introImg";
        img.setAttribute("src", "https://images.ctfassets.net/usf1vwtuqyxm/3QQaEkThAnIAiXveGhJYD9/f79a571dbe9fd456d65e783040601fdc/hogwarts-castle-.jpg?fm=jpg");
        startDiv.id = "startDiv";
        startDiv.className = "startDiv";
        btn.id = "startBtn";
        btn.className = "startBtn";
        btn.innerText = "Start Game"

        div.appendChild(img);
        startDiv.appendChild(btn);
        div.appendChild(startDiv);
        mainDiv.appendChild(div);
    }

    //Create a div that houses the rules that show on the start screen
    function rulesBlock() {
        var mainDiv = document.getElementById("mainContainer");
        var rulesDiv = document.createElement("div");
        var rulesHeader = document.createElement("h1");
        var ul = document.createElement("ul");
        var rulesList = [
            "90 Seconds to complete the quiz",
            "10 questions",
            "5 points for every correct answer",
            "5 seconds off the clock for every incorrect answer",
            "No magic allowed..."
        ]

        ul.id = "rulesList";
        ul.className = "rulesList";

        for (i = 0; i < rulesList.length; i++) {
            var li = document.createElement("li");
            li.innerText = rulesList[i];
            ul.appendChild(li);
        }

        rulesDiv.id = "rulesDiv";
        rulesDiv.className = "rulesDiv";

        rulesHeader.id = "rulesHeader";
        rulesHeader.className = "rulesHeader";
        rulesHeader.innerText = "Harry Potter Trivia Rules:";

        rulesDiv.appendChild(rulesHeader);
        rulesDiv.appendChild(ul);
        mainDiv.appendChild(rulesDiv);
    }

    //Create HTML elements
    createTopNav();
    createMain();
    timerDiv();
    rulesBlock();
    createQuizDiv();

    //Game Functionality
    var score;
    var questionCount;

    var questions = [
        {
            question: "What is Harry's last name?",
            ans1: "Styles",
            ans2: "Potter",
            ans3: "Dumbledore",
            ans4: "Snape",
            correctAns: "Potter"
        },
        {
            question: "What is the name of Albus Dumbledore's brother?",
            ans1: "Aberforth",
            ans2: "James",
            ans3: "Lupin",
            ans4: "Ron",
            correctAns: "Aberforth"
        },
        {
            question: "When Dumbledore dies, who becomes the rightful owner of the Elder Wand?",
            ans1: "Harry Potter",
            ans2: "Bellatrix Lestrange",
            ans3: "Draco Malfoy",
            ans4: "Severus Snape",
            correctAns: "Draco Malfoy"
        },
        {
            question: "What flavored 'Bertie Botts Every Flavored Bean' did Professor Dumbledore eat in 'Harry Potter and the Sorcerer's Stone'?",
            ans1: "Boogers",
            ans2: "Earwax",
            ans3: "Toffee",
            ans4: "Vomit",
            correctAns: "Earwax"
        },
        {
            question: "What are wizards called that can transform into an animal?",
            ans1: "Tranimal",
            ans2: "Pet",
            ans3: "Animal Wizard",
            ans4: "Animagus",
            correctAns: "Animagus"
        },
        {
            question: "Who is Ron's girlfiend in 'Harry Potter and the Half Blood Prince'?",
            ans1: "Parvarti Patel",
            ans2: "Lavendar Brown",
            ans3: "Luna Lovegood",
            ans4: "Hermione Granger",
            correctAns: "Lavendar Brown"
        },
        {
            question: "What gift from Neville's grandmother does Malfoy steal?",
            ans1: "Remembrall",
            ans2: "Chocolate Frog",
            ans3: "Nimbus 2000",
            ans4: "Foe Glass",
            correctAns: "Remembrall"
        },
        {
            question: "What model broomstick does the Slytherin Quiddich team ride in 'Harry Potter and the Chamber of Secrets'?",
            ans1: "Firebolt",
            ans2: "Clean Sweep",
            ans3: "Nimbus 2000",
            ans4: "Nimbus 2001",
            correctAns: "Nimbus 2001"
        },
        {
            question: "Which team wins the Quiddich World Cup before Harry's 4th year at Hogwarts?",
            ans1: "Ireland",
            ans2: "Bulgaria",
            ans3: "England",
            ans4: "Spain",
            correctAns: "Ireland"
        },
        {
            question: "How many Horcruxes did Tom Riddle make?",
            ans1: "2",
            ans2: "10",
            ans3: "7",
            ans4: "22",
            correctAns: "7"
        }
    ]

    //Randomize Questions
    function randomizeQuestions(arr) {

        for (i = 0; i < 1000; i++) {
            var loc1, loc2, tmp;
            loc1 = Math.floor(Math.random() * arr.length);
            loc2 = Math.floor(Math.random() * arr.length);
            tmp = arr[loc1];
            arr[loc1] = arr[loc2];
            arr[loc2] = tmp;
        }
    }

    randomizeQuestions(questions);


    //Start Game - give functionality to the start button
    var startButton = document.getElementById("startBtn");

    //Function to add start game sunctionality to item
    function play(x) {
        x.addEventListener("click", function(ev){
            ev.preventDefault();
            score = 0;
            questionCount = 0;

            document.getElementById("rulesDiv").style.display ="none";
            startTimer();
            renderQuestion();
        })
    }
    play(startButton);

    // Clears the quiz div that houses the game
    function clearQuizDiv() {
        var quizDiv = document.getElementById("quizDiv");
        quizDiv.innerHTML = "";
    }

    //Start Timer function -- sets timer to the alloted question time and starts countdown
    var questionTime;
    var myTimer;

    function startTimer() {
        questionTime = 90;
        var timer = document.getElementById("timerCount");
        timer.innerText = questionTime;

            myTimer = setInterval(function() {
            if(questionTime > 0){
                questionTime--;
                timer.innerHTML = questionTime;
            } else {
                endGame();
            }
       }, 1000)

    }

    //Render Question Function
    function renderQuestion() {
        clearQuizDiv();

        var timer = document.getElementById("timerCount");
        var quizDiv = document.getElementById("quizDiv");
        var div = document.createElement("div");
        var question = document.createElement("h2");
        var answersDiv = document.createElement("div");

        if(questionCount < Object.values(questions).length) {

            div.id = "questionDiv";
            div.className = "questionDiv";

            question.classname = "question";
            question.innerText = Object.values(questions)[questionCount].question;

            answersDiv.id = "answersDiv";
            answersDiv.className = "answersDiv";


            //Loops over the values in each question from the "questions" object, puts them in an element, and adds an event listener for click
            for (i = 1; i < Object.values(Object.values(questions)[questionCount]).length - 1; i++ ) {
                var answer = document.createElement("button");
                answer.id = "answer" + i;
                answer.className = "answerBtn";
                answer.innerText = Object.values(Object.values(questions)[questionCount])[i];

                //Adds click functionality to answer buttons and logig for right or wrong answer
                answer.addEventListener("click", function(){
                    if (this.innerText === Object.values(Object.values(questions))[questionCount].correctAns){
                        this.setAttribute("style", "background-color: green");
                        setTimeout(() => {
                            questionCount++;
                            score += 5;
                            renderQuestion();
                        }, 700);
                    } else {
                        this.setAttribute("style", "background-color: red");
                        questionTime -= 5;
                        if (questionTime <= 0){
                            document.getElementById("timerCount").innerText = 0;
                            endGame();
                        } else {
                            setTimeout(() => {
                                questionCount++;
                                renderQuestion();
                            }, 700);
                        }
                    }
                });
                answersDiv.appendChild(answer);
            }

            div.appendChild(question);
            div.appendChild(answersDiv);
            quizDiv.appendChild(div);

        } else {
            endGame();
            timer.innerText = "Finished!";
        }
    }

    //Game over Function
    function endGame() {
        clearInterval(myTimer);
        clearQuizDiv();
        endScore();
    }

    //Renders the the players score and a play again button
    function endScore() {
        var quizDiv = document.getElementById("quizDiv");
        var scoresList = renderHighScores();
        var div = document.createElement("div");
        var playAgainBtn = document.createElement("button");
        var scoreP =  document.createElement("p");
        var inputDiv = document.createElement("div");
        var form = document.createElement("form");
        var input = document.createElement("input");
        var submit = document.createElement("input");


        input.id = "playersInitials";
        input.setAttribute("type", "text");
        input.setAttribute("maxlength", "3");

        submit.id = "initialsSubmit";
        submit.setAttribute("type", "submit");
        submit.setAttribute("value", "Submit");

        form.appendChild(input);
        form.appendChild(submit);

        form.addEventListener("submit", function(ev){
            ev.preventDefault();

            var initials = document.getElementById("playersInitials");
            document.getElementById("initialsSubmit").disabled = true;

            //Get existing scores from local storage
            var storedScores = JSON.parse(localStorage.getItem("scores"));

            if(storedScores == null) {
                storedScores = [];
            }
            
            //Set the current score and initials from input
            var currentScores = {initials: initials.value, score: score};
            storedScores.push(currentScores);
            localStorage.setItem("scores", JSON.stringify(storedScores));

            //Rerender High Scores
            div.removeChild(div.childNodes[div.childNodes.length - 1])
            scoresList = renderHighScores();

            div.appendChild(scoresList);

            initials.disabled = true;
            initials.value = "";
        })

        inputDiv.id = "inputDiv";
        inputDiv.className = "inputDiv";
        inputDiv.innerHTML = '<p class="initialsLabel">Enter Your Initials:</p>';
        inputDiv.appendChild(form);

        div.id = "questionDiv";
        div.className = "questionDiv";

        scoreP.className = "finalScore";

        playAgainBtn.innerText = "Play Again";
        play(playAgainBtn);

        scoreP.innerText = "Your Score: " + score;

        div.appendChild(scoreP);
        div.appendChild(inputDiv);
        div.appendChild(playAgainBtn);
        div.appendChild(scoresList);
        quizDiv.appendChild(div);
    }

    //Render High Score board
    function renderHighScores() {
        var scores = JSON.parse(localStorage.getItem("scores"));
        if (scores == null){
            scores = [];
        }
        var container = document.createElement("div");
        var scoresDiv = document.createElement("div");
        var scoresHeader =  document.createElement("p");
        var ul = document.createElement("ul");

        container.id = "scoreHolder";

        scoresDiv.id = "scoresDiv";
        scoresDiv.className = "scoresDiv";

        scoresHeader.id = "scoresHeader";
        scoresHeader.className = "scoresHeader";
        scoresHeader.innerText = "Scores:"

        scoresDiv.appendChild(scoresHeader);

        ul.className = "scoresList";

        for (i = 0; i < scores.length; i++) {
            var li = document.createElement("li");
            li.innerHTML= '<span class="playerName">' + scores[i].initials + '</span>   <span class="playerScore">' + "Score:  " + scores[i].score + "</span>";
            ul.prepend(li);
        }

        scoresDiv.appendChild(ul);
        container.appendChild(scoresDiv);

        return container;
    }
})