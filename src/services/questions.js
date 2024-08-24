function Question(
  id,
  watched,
  answered,
  text,
  options,
  correctOptions,
  advise,
) {
  this.id = id;
  this.watched = watched;
  this.answered = answered;
  this.text = text;
  this.options = options;
  this.correctOptions = correctOptions;
  this.advise = advise;
}

const q1 = new Question(
  1,
  true,
  false,
  "Do you know how loved you are?",
  [
    "Yes",
    "I think so...",
    "I'm conscious that I have no idea",
    "I would like to know it",
  ],
  [0, 1, 2, 3],
  "If you want to have an idea of how loved you are... read the Bible, spend time with Jesus",
);
const q2 = new Question(
  2,
  false,
  false,
  "How much God have gave us...?\n¿Cuánto nos ha dado Dios?",
  ["Nothing", "A lot", "Sufficient", "We have more than enough!"],
  [3],
  "Romanians 8: 27-29\nHow would you live your life, if you'd know you have more than enough...?",
);
const q3 = new Question(
  3,
  false,
  false,
  "What is expected from you?\n¿Qué expectativas hay sobre ti?",
  [
    "I need to be a successful person",
    "I'm supposed to study hard a find a well paid job.",
    "Jadassa is going to be a normal, common person.",
    "I'm not forced to 'do' or 'reach' something",
  ],
  [3],
  "That's it! eso es! Everything is licit, but not everything is convinient. Be prudent, be thankful, be patient, be YOU.",
);
const q4 = new Question(
  4,
  false,
  false,
  "How are you doing today?\n¿Cómo estás hoy?",
  ["bad.", "I'm calm today.", "I feel pesimist", "Really good!"],
  [0, 1, 2, 3],
  "Excellent! just remember: YOU ARE LOVED, YOU ARE LOVED, YOU ARE LOVED.\nand continue being you, YOU!!!.",
);

export function getAllQuestions() {
  return [q1, q2, q3, q4];
}
