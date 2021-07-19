function Question(question, answer, correct) {
  (this.question = question), (this.answer = answer), (this.correct = correct);
}
Question.prototype.questionDisplay = function () {
  console.log(this.question);
  for (var i = 0; i < this.answer.length; i++) {
    console.log(i + ":" + this.answer[i]);
  }
};
Question.prototype.checkanswer = function (ans, callback) {
  var sc;
  if (ans === this.correct) {
    console.log("Correct Answer");
    sc = callback(true);
  } else {
    console.log("Wrong Answer.Try Next Time");
    sc = callback(false);
  }
  this.scroing(sc);
};
Question.prototype.scroing = function (score) {
  console.log("Your current scrore is " + score);
};
function score() {
  var sc = 0;
  return function (correct) {
    if (correct) {
      sc++;
    }
    return sc;
  };
}
var keepScore = score();
let q1, q2, q3;
q1 = new Question(
  "Is JavaScript is really a lovely langugess?",
  ["Yes", "No"],
  0
);
q2 = new Question("Who is most hot?", ["kiara", "Alia", "Mehazabien"], 0);
q3 = new Question("Who is king?", ["C++", "Java", "Python", "Javascript"], 3);
const question = [q1, q2, q3];
function nextQuestion() {
  const n = Math.floor(Math.random() * question.length);
  question[n].questionDisplay();
  let answerr = prompt("Select the right answer");
  if (answerr !== "exit") {
    question[n].checkanswer(parseInt(answerr), keepScore);
    nextQuestion();
  }
}
nextQuestion();
