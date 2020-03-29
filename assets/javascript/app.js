$('#start').on('click', function() {
    game.start();
})

$(document).on('click', '#end', function(){
    game.done();
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
    counter: 5,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter==0){
            console.log("Time is up!");
            game.done();
        }
    },

    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $("#start").remove();
        for(var i=0;i<questions.length;i++){
            $('#subwrapper').append('<h2>'+questions[i].question+'</h2');
            for(var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type= 'radio' name='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]) 
            }   
        }
        $('#subwrapper').append('<br><button id="end">Done</button>')    
    },


    done: function(){
        $.each($("input[name='question-0']: checked"),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']: checked"),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']: checked"),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']: checked"),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']: checked"),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']: checked"),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-6']: checked"),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-7']: checked"),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        this.result();
    },

    result: function(){
        clearInterval(timer);
        $('#subwrapper h2').remove();
        $('#subwrapper').html("<h2>All done!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length -(this.incorrect+this.correct))+"</h3>");
    }
}
