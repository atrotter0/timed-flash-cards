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
    const question2 = new Question(2, 200, 'HTML/CSS', 'What different options are available when using floats?', 'float: none|left|right|initial|inherit;');
    const question3 = new Question(2, 200, 'HTML/CSS', 'What is the difference between margin and padding?', 'Margin is the space outside of an element\'s border, while padding is the space inside of its border.');
    const question4 = new Question(4, 200, 'HTML/CSS', 'How does CSS inheritance work?', ' CSS inheritance works on a property by property basis. When applied to an element in a document, a property with the value \'inherit\' will use the same value as the parent element has for that property.');
    const question5 = new Question(2, 200, 'HTML/CSS', 'What does the term viewport mean?', 'The viewport is the user\'s visible area of a web page.');

    questions.push(question1, question2, question3, question4, question5);
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
    const question10 = new Question(5, 500, 'JavaScript', 'What is the root component?', 'Where you place the router-outlet, headers, footers and router-outlet is the one which holds the views based on your routing.');

    questions.push(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10);
    return questions;
  }

  buildSqlQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'SQL', 'What keyword selects all contents from a table?', ' * ');
    const question2 = new Question(2, 200, 'SQL', 'What\'s a primary key?', 'A primary key is a special relational database table column (or combination of columns) designated to uniquely identify all table records. A primary key\'s main features are: It must contain a unique value for each row of data. It cannot contain null values.');
    const question3 = new Question(3, 300, 'SQL', 'What\'s a database schema?', 'A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied on the data. ... It defines tables, views, and integrity constraints.');
    const question4 = new Question(5, 500, 'SQL', 'What is a left join?', 'The LEFT JOIN keyword returns all records from the left table (table1), and the matched records from the right table (table2). The result is NULL from the right side, if there is no match.');
    const question5 = new Question(4, 400, 'SQL', 'What is an inner join?', 'The INNER JOIN keyword selects records that have matching values in both tables.');

    questions.push(question1, question2, question3, question4, question5);
    return questions;
  }

  buildCsharpQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'CSharp', 'How would you declare an array of numbers?', 'int[] myArray = [1,2,3]');
    const question2 = new Question(2, 200, 'CSharp', 'What is a namespace?', 'A tool to structure the project into meaningful pieces, and to distinguish classes with the same name');
    const question3 = new Question(3, 300, 'CSharp', 'What is encapsulation and why is it important?', 'Encapsulation means that the internal representation of an object is generally hidden from view outside of the object\'s definition. Typically, only the object\'s own methods can directly inspect or manipulate its fields.');
    const question4 = new Question(1, 100, 'CSharp', 'What process should we follow when designing our specs?', 'TDD or BDD, meaning Test Driven Development or Behavior Driven Development');
    const question5 = new Question(1, 100, 'CSharp', 'What is a static property? ', 'A static property is similar to a static method. It uses the composite name to be accessed. Static properties use the same get and set tokens as instance properties. They are useful for abstracting global data in programs.');

    questions.push(question1, question2, question3, question4, question5);
    return questions;
  }

  buildRubyQuestions() {
    const questions = [];
    const question1 = new Question(1, 100, 'Ruby', 'What method would you use to segment a sentence string into individual words?', ".split");
    const question2 = new Question(2, 100, 'Ruby', 'How does inheritance work in Ruby? How is it useful?', "Inheritance is a relation between two classes. In Ruby, a class can only inherit from a single other class.");
    const question3 = new Question(3, 100, 'Ruby', 'What is the difference between a module and a class?', "A Module is a collection of methods and constants. A module has instance methods, classes can inherit from it (via include, Rubyists call it a 'mixin'), but has no instances.");
    const question4 = new Question(4, 100, 'Ruby', 'When should we use a mixin instead of class inheritance?', "When we want to mimic multiple inheritance.");
    const question5 = new Question(2, 100, 'Ruby', 'What is an attr method and why are these methods useful?', "An attr method makes it easy to add read/write methods to our classes. They also make our code more readable.");

    questions.push(question1, question2, question3, question4, question5);
    return questions;
  }
}
