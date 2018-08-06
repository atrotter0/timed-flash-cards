import { Game } from './../src/game';
import { Question } from './../src/question';
import { QuestionsHolder } from './../src/questions-holder';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();
  });

  it('should test the game constructor', function() {
    const gameTest = new Game();
    expect(game).toEqual(gameTest);
  });

  it('should find all questions in set catagory', function() {
    const htmlQuestion = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
    const questionArray = [htmlQuestion];
    expect(game.findByCategory('htmlCss')).toEqual(questionArray);
  });

  it('should find all questions by level', function() {
    const question1 = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
    const question2 = new Question(1, 100, 'JavaScript', 'What is an if/else statement?', 'Executes a block of code if a specified condition is true.');
    const question3 = new Question(1, 100, 'SQL', 'What keyword selects all contents from a table?', ' * ');
    const question4 = new Question(1, 100, 'CSharp', 'How would you declare an array of numbers?', 'int[] myArray = [1,2,3]');
    const question5 = new Question(1, 100, 'Ruby', 'How would you split a sentence into words?', "words_string.split('')");
    const expectedArray = [
      question1,
      question2,
      question3,
      question4,
      question5
    ];
    expect(game.findByLevel(1)).toEqual(expectedArray);
  });

  it('should reset timer', function() {
    game.resetTimer();
    expect(game.timer).toEqual(10);
  });

  it('should decrement timer every second', function() {
    jasmine.clock().install();
    game.startTimer();
    jasmine.clock().tick(5001);
    expect(game.timer).toEqual(5);
  });

  it('should increment score by value', function() {
    game.plusScore(100);
    game.plusScore(200);
    expect(game.score).toEqual(300);
  });

  it('should decrement score by value', function() {
    game.minusScore(100);
    game.minusScore(200);
    expect(game.score).toEqual(-300);
  });
});
