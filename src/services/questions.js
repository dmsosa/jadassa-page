function Question(id, watched, answered, text, options, correctOptions, advise) {
    this.id = id;
    this.watched = watched;
    this.answered = answered;
    this.text = text;
    this.options = options;
    this.correctOptions = correctOptions;
    this.advise = advise;
};

const q1 = new Question(
    1,
    true,
    false,
    "Do you know how loved you are?", 
    ["Yes", "I think so...", "I'm conscious that I have no idea", "I would like to know it"],
    [0, 1, 2, 3],
    "If you want to have an idea of how loved you are... read the Bible, spend time with Jesus"
);
const q2 = new Question(
    2,
    false,
    false,
    "Do you know 2?", 
    ["Yes", "I think so...", "I'm conscious that I have no idea", "I would like to know it"],
    [0, 1, 2],
    "If you want to have an idea of how loved you are... read the Bible, spend time with Jesus"
);
const q3 = new Question(
    3,
    false,
    false,
    "Do you know how 3?", 
    ["Yes", "I think so...", "I'm conscious that I have no idea", "I would like to know it"],
    [0],
    "If you want to have an idea of how loved you are... read the Bible, spend time with Jesus"
);
const q4 = new Question(
    4,
    false,
    false,
    "Do you know  4?", 
    ["Yes", "I think so...", "I'm conscious that I have no idea", "I would like to know it"],
    [1, 2],
    "If you want to have an idea of how loved you are... read the Bible, spend time with Jesus"
);

export function getAllQuestions() {
    return [q1, q2, q3, q4]
};


