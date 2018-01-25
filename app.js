var state = {
    items : [{ques: 'If there are three apples and you took two away, how many do you have?', options: ['one', 'two', 'three', 'none'], ans: "two"},
            {ques: 'Which is heavier, 100 pounds of rocks or 100 pounds of gold?', options: ['100 pounds of gold', '100 pounds of rock', 'They weigh the same'], ans: "They weigh the same"},
            {ques: 'How many sides does a circle have?', options: ["None, It's a circle", "The back", "Four", "Two"], ans: "Two"},
            {ques: 'If you pass the 2nd person in a race what will You be coming?', options: ['3rd', '1st', '2nd'], ans: "2nd"}]
};

var render = function() {
    $('main').text('<div class="start"><div>You\'ll be asked with the questions which are very tricky. So be ready. Click here to start</div><button class="js-start">Start</button>');
};

var renderQuiz = function(i = 0) {
    $('main').text('');
    $('main').html('<div class="container">\
        <div>\
            <div class="content-header">7 out of 10</div>\
            <div class="content-header abs">4 correct 3 wrong</div>\
        </div>\
        <h2>Question:</h2>\
        <div class="ques">' + state.items[i].ques + '</div>\
        <div class="option">\
            <input type="radio">\
            <div class="inline">' + state.items[i].options[0] + '</div>\
        </div>\
        <div class="option">\
            <input type="radio">\
            <div class="inline">' + state.items[i].options[1] + '</div>\
        </div>\
        <div class="option">\
            <input type="radio">\
            <div class="inline">' + state.items[i].options[2] + '</div>\
        </div>\
        <div class="option">\
            <input type="radio">\
            <div class="inline">' + state.items[i].options[3] + '</div>\
        </div>\
        <nav>\
            <button>next</button>\
        </nav>\
    </div>')
};

$(function() {
    var quesNo = 0;
    $('.js-start').on('click', function() {
        renderQuiz(quesNo);
        quesNo += 1;
    });
});