import { Question } from './question';

export class QuestionsHolder {
  constructor() {
    this.category = {
      htmlCss: this.buildHtmlCssQuestions(),
      javascript: this.buildJavascriptQuestions(),
      sql: this.buildSqlQuestions(),
      csharp: this.buildCsharpQuestions(),
      ruby: this.buildRubyQuestions()
    };
  }

  buildHtmlCssQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');

    questions.push(question1);
    return questions;
  }

  buildJavascriptQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'JavaScript', 'What is an if/else statement?', 'Executes a block of code if a specified condition is true or false.');
    const question2 = new Question(2, 200, 'JavaScript', 'What is npm? ', 'npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.');
    const question3 = new Question(2, 200, 'JavaScript', 'What is webpack and what is it used for', 'Webpack is a module bundler, but you can also use it for running tasks as well.');
    const question4 = new Question(3, 300, 'JavaScript', 'What is a dependency graph?', 'Webpack takes modules with dependencies and generates static assets representing those modules. It takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes.');
    const question5 = new Question(3, 300, 'JavaScript', 'What is the difference between concatenation and minification?', 'Concatenation - Merges all the specified files to create a new single file. Minification - It simply means all the unnecessary white spaces and redundant optional tokens will be removed.');
    const question6 = new Question(1, 100, 'JavaScript', 'What is Jasmine?', 'Jasmine is an an open source testing framework for JavaScript');
    const question7 = new Question(3, 300, 'JavaScript', 'In terms of API calls, whats a parameter?', 'Parameters are options you can pass with the endpoint (such as specifying the response format or the amount returned) to influence the response. There are four types of parameters: header parameters, path parameters, query string parameters, and request body parameters.');
    const question8 = new Question(3, 300, 'JavaScript', 'How do we ensure our API keys aren\'t published publicly to GitHub?', 'Store your API key in a .env file and include that file in your GitIgnore');
    const question9 = new Question(4, 400, 'JavaScript', 'What are the benefits of using TypeScript over JavaScript?', 'TypeScript is a superset of JavaScript that gives you advantages like: Optional static typing (the key here is optional) Type Inference, which gives some of the benefits of types, without actually using them. Access to ES6 and ES7 features, before they become supported by major browsers.');
    const question10 = new Question(5, 500, 'JavaScript', 'What is the root component?', ' Where you place the router-outlet, headers, footers and router-outlet is the one which holds the views based on your routing.');
    questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);
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
    const question1 = new Question(1, 100, 'Ruby', 'What method would you segment a sentence string into individual words?', ".split");

    questions.push(question1);
    return questions;
  }
}
