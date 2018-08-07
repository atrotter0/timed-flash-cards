import { Question } from './question';
import { QuestionsHolder } from './questions-holder';

export class Game {
  constructor() {
    this.score = 0;
    this.timer = 10;
    this.deck = [];
    this.questions = new QuestionsHolder();
    this.currentQuestionIndex = 0;
    this.currentQuestion = [];
    this.correctQuestions = [];
    this.wrongQuestions = [];
  }

  getAllQuestions() {
    const allQuestions = [];
    const keysArray = Object.keys(this.questions.category);
    keysArray.forEach((key) => {
      this.questions.category[key].forEach(function(question) {
        allQuestions.push(question);
      });
    });
    return allQuestions;
  }

  findByCategory(category) {
    return this.questions.category[category];
  }

  findByLevel(level) {
    const levelMatches = [];
    const keysArray = Object.keys(this.questions.category);
    keysArray.forEach((key) => {
      this.questions.category[key].forEach(function(question) {
        if (question.level === parseInt(level)) levelMatches.push(question);
      });
    });
    return levelMatches;
  }

  resetTimer() {
     this.timer = 10;
  }

  plusScore(value) {
    this.score += value;
  }

  minusScore(value) {
    this.score -= value;
  }
}
