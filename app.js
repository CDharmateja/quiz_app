var state = {
    items : [{ques: 'If there are three apples and you took two away, how many do you have?', options: ['one', 'two', 'three', 'none'], ans: "two"},
            {ques: 'Which is heavier, 100 pounds of rocks or 100 pounds of gold?', options: ['100 pounds of gold', '100 pounds of rock', 'They weigh the same', 'Can\'t say'], ans: "They weigh the same"},
            {ques: 'How many sides does a circle have?', options: ["None, It's a circle", "The back", "Four", "Two"], ans: "Two"},
            {ques: 'If you pass the 2nd person in a race what will You be coming?', options: ['3rd', '1st', '2nd', 'information is insufficent'], ans: "2nd"},
            {ques: 'Mary\'s father had 5 children:\
            Mimi\
            Mumu\
            Mama\
            Meme\
            What was the 5th child\'s name?', options: ['Momo', 'Mary', 'Marie', 'None'], ans: "Mary"},
            {ques: 'What is light as a feather, but even the strongest man cannot hold it more than a few minutes?', options: ['A feather', 'A smile', 'His breath', 'None'], ans: 'His breath'},
            {ques: 'There was an airplane crash, every single person died, but two people survived. How is this possible?', options: ['They were not on the airplane', 'They were married', 'The 2 were saved by others', 'None'], ans: 'They were married'},
            {ques: 'How far can you walk into the woods?', options: ['Halfway', 'All the way and then back again', 'As far as you want', 'None'], ans: 'Halfway'},
            {ques: 'The Mississippi River is the dividing line between Tennessee and Arkansas. If an airplane crashed exactly in the middle of the Mississippi River there, where would the survivors be buried?', options: ['In the town of their birth', 'Nowhere, you don\'t bury survivors', 'Whatever side the people were on', 'None'], ans: "you don't bury survivors"}]
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
            <button class="js-next">next</button>\
        </nav>\
    </div>')
};

var nextQues = function(quesNo) {
    $('.js-next').on('click', function() {
        renderQuiz(quesNo);
        optionSelect();
        quesNo++;
        nextQues(quesNo);
    });
};

var optionSelect = function() {
    $('input[type="radio"]').on('change', function() {
        $('input[type="radio"]').not(this).prop('checked', false);
    });
}


$(function() {
    var quesNo = 0;
    $('.js-start').on('click', function() {
        renderQuiz(quesNo);
        optionSelect();
        quesNo += 1;
        nextQues(quesNo);
    });
});