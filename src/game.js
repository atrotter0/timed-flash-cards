import { Question } from './question';
import { QuestionsHolder } from './questions-holder';

export class Game {
  constructor() {
    this.score = 0;
    this.timer = 0; //change this
    this.questions = new QuestionsHolder();
  }
}
