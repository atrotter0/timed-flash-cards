import { Question } from './question';
import { QuestionsHolder } from './questions-holder';

export class Game {
  constructor() {
    this.score = 0;
    this.timer = 0; //change this
    this.questions = new QuestionsHolder();
  }

  findByCategory(category) {
    return this.questions.category[category];
  }

  findByLevel(level) {
    const levelMatches = [];
    const keysArray = Object.keys(this.questions.category);
    return keysArray;
  }
}
