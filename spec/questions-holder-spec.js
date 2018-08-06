import { Question } from './../src/question';
import { QuestionsHolder } from './../src/questions-holder';

describe('QuestionsHolder', function() {
  let questionsHolder;

  beforeEach(function() {
    questionsHolder = new QuestionsHolder();
  });

  it('should test the constructor instantiates all properties of the QuestionsHolder object', function() {
    const htmlQuestion = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
    const jsQuestion = new Question(1, 100, 'JavaScript', 'What is an if/else statement?', 'Executes a block of code if a specified condition is true.');
    const sqlQuestion = new Question(1, 100, 'SQL', 'What keyword selects all contents from a table?', ' * ');
    const csharpQuestion = new Question(1, 100, 'CSharp', 'How would you declare an array of numbers?', 'int[] myArray = [1,2,3]');
    const rubyQuestion = new Question(1, 100, 'Ruby', 'How would you split a sentence into words?', "words_string.split('')");
    expect(questionsHolder.category.htmlCss).toContain(htmlQuestion);
    expect(questionsHolder.category.javascript).toContain(jsQuestion);
    expect(questionsHolder.category.sql).toContain(sqlQuestion);
    expect(questionsHolder.category.csharp).toContain(csharpQuestion);
    expect(questionsHolder.category.ruby).toContain(rubyQuestion);
  });
});
