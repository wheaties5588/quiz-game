
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
            topScores: {
                name: "High Scores",
                link: "./highscores.html",
            },
            gitHub: {
                name: "Creator GitHub",
                link: "https://www.github.com/wheaties5588",
                target: "_blank"
            }
        }

        header.id = "header";

        topNav.id = "topNav";
        topNav.className = "navbar navbar-expand-lg navbar-dark nav-back"

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
        mainDiv.className = "container";
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

    //Create HTML elements
    createTopNav();
    createMain();
    timerDiv();
    createQuizDiv();


    var questionCount = 0;
    var questions = {
        q1: {
            question: "What is Harry's last name?",
            ans1: "Smith",
            ans2: "Potter",
            ans3: "Dumbledor",
            ans4: "Snape",
            correctAns: "Potter"
        },
        q2: {
            question: "What is the name of Albus Dumbledor's brother?",
            ans1: "Aberforth",
            ans2: "James",
            ans3: "Lupin",
            ans4: "Ron",
            correctAns: "Aberforth"
        },
        q3: {
            question: "When Dumbledor dies, who becomes the rightful owner of the Elder Wand?",
            ans1: "Harry Potter",
            ans2: "Bellatrix Lestrange",
            ans3: "Draco Malfoy",
            ans4: "Severus Snape",
            correctAns: "Draco Malfoy"
        }
    }



    //Start Game

    var startButton = document.getElementById("startBtn");
    startButton.addEventListener("click", function(){
        // clearQuizDiv();
        startTimer();
        renderQuestion();
    })



    function clearQuizDiv() {
        var quizDiv = document.getElementById("quizDiv");
        quizDiv.innerHTML = "";
    }


    //Start Timer function -- sets timer to the alloted question time and starts countdown
    function startTimer() {
        var questionTime = 90;
        var timer = document.getElementById("timerCount");
        timer.innerText = questionTime;

            setInterval(function() {
            if(questionTime > 0){
                questionTime--;
                timer.innerHTML = questionTime;
            } else {
                clearInterval();
                gameOver();
            }
        }, 1000)

    }


    //Render Question Function
    function renderQuestion() {
        console.log(questionCount);
        clearQuizDiv();
        var quizDiv = document.getElementById("quizDiv");
        var div = document.createElement("div");
        var question = document.createElement("h2");

        div.id = "questionDiv";
        div.className = "questionDiv";

        question.classname = "question"
        //question.innerText = Object.value[questionCount];

        console.log(Object.values(questions)[questionCount].question);

        question.innerText = Object.values(questions)[questionCount].question;
        div.appendChild(question);



        quizDiv.appendChild(div);
        questionCount++;
    }





    //Game Over Function
    function gameOver() {

    }





    // var quizTime = 15;

    //     var startButton = document.getElementById("startBtn");
    //     startButton.addEventListener("click", alertMe);
    //     var timeNum = document.getElementById("timerCount");
    
    // function alertMe() {
    //     setInterval(function() {
    //         if(quizTime > 0){
    //             quizTime--;
    //             timeNum.innerHTML = quizTime;
    //             console.log(quizTime);
    //         } else {
    //             clearInterval();
    //         }

    //     }, 1000)
    // }






    // //Timer - Countdown Function
    // document.getElementById("startBtn").addEventListener("click", function() {
    //     var timeNum = document.getElementById("timerCount");


    //         setInterval(function() {
    //             quizTime--;
    //             timeNum.innerHTML = quizTime;
    //             console.log(quizTime);
    
    //         }, 1000)
    // })






    // function startTimer() {

    // setTimeout(function() {
    //     alert("Game Over!");

    // }, 3000);
    // }

})

