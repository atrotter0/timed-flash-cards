import { Question } from './question';
import { QuestionsHolder } from './questions-holder';

export class Game {
  constructor() {
    this.score = 0;
    this.timer = 0;
    this.questions = new QuestionsHolder();
  }

  findByCategory(category) {
    return this.questions.category[category];
  }

  findByLevel(level) {
    const levelMatches = [];
    const keysArray = Object.keys(this.questions.category);
    keysArray.forEach((key) => {
      this.questions.category[key].forEach(function(question) {
        if (question.level === level) levelMatches.push(question);
      });
    });
    return levelMatches;
  }

  startTimer() {
    this.resetTimer();
    setInterval(() => {
      this.timer--;
    }, 1000);
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
