import { Question } from './question';

export class QuestionsHolder {
  constructor() {
    this.htmlCss = this.buildHtmlCssQuestions();
    this.javascript = this.buildJavascriptQuestions();
    this.sql = this.buildSqlQuestions();
    this.csharp = this.buildCsharpQuestions();
    this.ruby = this.buildRubyQuestions();
  }

  buildHtmlCssQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');

    questions.push(question1);
    return questions;
  }

  buildJavascriptQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'JavaScript', 'What is an if/else statement?', 'Executes a block of code if a specified condition is true.');

    questions.push(question1);
    return questions;
  }

  buildSqlQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'SQL', 'What keyword selects all contents from a table?', ' * ');

    questions.push(question1);
    return questions;
  }

  buildCsharpQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'CSharp', 'How would you declare an array of numbers?', 'int[] myArray = [1,2,3]');

    questions.push(question1);
    return questions;
  }

  buildRubyQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'Ruby', 'How would you split a sentence into words?', "words_string.split('')");

    questions.push(question1);
    return questions;
  }
}
