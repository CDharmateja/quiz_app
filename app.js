// single state variable
var state = {
    items : [{ques: 'If there are three apples and you took two away, how many do you have?', options: ['one', 'two', 'three', 'none'], ans: 1},
            {ques: 'Which is heavier, 100 pounds of rocks or 100 pounds of gold?', options: ['100 pounds of gold', '100 pounds of rock', 'They weigh the same'], ans: 2},
            {ques: 'How many sides does a circle have?', options: ["None, It's a circle", "The back", "Four", "Two"], ans: 3},
            {ques: 'If you pass the 2nd person in a race what will You be coming?', options: ['3rd', '1st', '2nd'], ans: 2},
            {ques: 'Mary\'s father had 5 children:\
            Mimi\
            Mumu\
            Mama\
            Meme\
            What was the 5th child\'s name?', options: ['Momo', 'Mary', 'Marie'], ans: 1},
            {ques: 'What is light as a feather, but even the strongest man cannot hold it more than a few minutes?', options: ['A feather', 'A smile', 'His breath'], ans: 2},
            {ques: 'There was an airplane crash, every single person died, but two people survived. How is this possible?', options: ['They were not on the airplane', 'They were married', 'The 2 were saved by others'], ans: 1},
            {ques: 'How far can you walk into the woods?', options: ['Halfway', 'All the way and then back again', 'As far as you want'], ans: 0},
            {ques: 'The Mississippi River is the dividing line between Tennessee and Arkansas. If an airplane crashed exactly in the middle of the Mississippi River there, where would the survivors be buried?', options: ['In the town of their birth', 'Nowhere, you don\'t bury survivors', 'Whatever side the people were on'], ans: 1},
            {ques: 'How many months in a year have 28 days?', options: [12, 7, 1, 0], ans: 0}],   
    correct: 0,
    wrong: 0
};

// renders the info about quiz
var render = function() {
    $('main').html('<div class="start"><div>You\'ll be asked with the questions which are very tricky. So be ready. Click here to start</div><button class="js-start">Start</button>');
};

// renders the question
var renderQuiz = function(i = 0) {
    $('main').text('');
    var s = '';
    for (var j = 0; j < state.items[i].options.length; j++)
    {
        s += '<div class="option">\
        <input type="radio" value=' + j + '>\
        <div class="inline">' + state.items[i].options[j] + '</div>\
    </div>'
    }
    $('main').html('<div class="container">\
        <div>\
            <div class="content-header">' + (i + 1) +' out of 10</div>\
            <div class="content-header abs">' + state.correct + ' correct ' + state.wrong + ' wrong</div>\
        </div>\
        <h2>Question:</h2>\
        <div class="ques">' + state.items[i].ques + '</div>\
        <form>' + s + '\
        <button class="js-submit">Submit</button>\
        </form>\
    </div>')
};


// validates the submission
var submission = function(quesNo) {
    $('.js-submit').on('click', function(event) {
        event.preventDefault();
        if ($('input:checked').val() === undefined) {
            alert('please select an option');
            console.log(true);
            nextQues(quesNo);
            return null;
        }
        else if (state.items[quesNo].ans === parseInt($('input[type="radio"]:checked').val())) {
            state.correct += 1
            $('.container').append('<div>correct</div>');
        }
        else {
            $('.container').append('<div>wrong</div>');
            state.wrong += 1;
        }
        $('.js-submit').remove();
        $('.container').append('<button class="js-next">Next</button>');
        quesNo++;
        nextQues(quesNo);
        return null;
    });
};

// go to next question
var nextQues = function(quesNo) {
    if (quesNo > 9) {
        result();
        return;
    }
    $('.js-next').on('click', function() {
        renderQuiz(quesNo);
        optionSelect();
        submission(quesNo);
        return;
    });
};

// Select only one option
var optionSelect = function() {
    $('input[type="radio"]').on('change', function() {
        $('input[type="radio"]').not(this).prop('checked', false);
    });
}

// shows the result after the quiz
var result = function() {
    $('.container').html('<div>You got ' + state.correct + ' correct</div>\n<button class="js-start">Try again</button>');
    state.correct = 0;
    state.wrong = 0;
    $('.js-start').on('click', function() {
            startQuiz();
    });
    return;
}

// starts the quiz
var startQuiz = function() {
    var quesNo = 0;
    render();
    $('.js-start').on('click', function() {
        renderQuiz(quesNo);
        optionSelect();
        submission(quesNo);
        return;
    });
}

// start quiz when page loads
$(function() {
    startQuiz();
});