$("#start").on("click", function() {
    game.start();
})

var questions = [{
    question: "Who won the World Cup in 2010?",
    answers: ["Spain", "Brazil", "United States", "Netherlands"],
    correctAnswer: "Spain"
}, {
    question: "Which baseball team won the first World Series?",
    answers: ["Pittsburgh Pirates", "New York Giants", "Boston Americans", "Detroit Tigers"],
    correctAnswer: "Boston Americans"
}, {
    question: "Which hockey team lost to the Blackhawks for the Stanley Cup in 2013?",
    answers: ["Los Angeles Kings", "Detroit Red Wings", "Boston Bruins", "New Jersey Devils"],
    correctAnswer: "Boston Bruins"
}, {
    question: "Which team won the 1st Super Bowl that was played on January 15, 1967?",
    answers: ["Green Bay Packers", "Oakland Raiders", "New York Jets", "Kansas City Chiefs"],
    correctAnswer: "Green Bay Packers"
}, {
    question: "In golf, a Birdie is 1 under par and an Eagle is 2 under par. What is 3 under par called?",
    answers: ["Treepies", "Bald Eagle", "Toucan", "Albatross"],
    correctAnswer: "Albatross"
}, {
    question: "What is Babe Ruth's career home run record?",
    answers: ["721", "715", "709", "714"],
    correctAnswer: "714"
}, {
    question: "How many strikes make a perfect game in bowling?",
    answers: ["11", "10", "12", "13"],
    correctAnswer: "12"
}, {
    question: "What sport would you be playing if you were using a mallet?",
    answers: ["Polo", "Pool", "Lacrosse", "Golf"],
    correctAnswer: "Polo"
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $("#counter").html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $("#start").remove();
        for(var i=0;i<questions.length;i++){
            $("#subwrapper").append("<h2>"+questions[i].question+"</h2");
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]) 
            }   
    }
}
}