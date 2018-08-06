import { Game } from './../src/game';
import { Question } from './../src/question';
import { QuestionsHolder } from './../src/questions-holder';

describe('Game', function() {
  let game;

  beforeEach(function() {
    game = new Game();

  });

  it('should find all questions in set catagory', function() {
    const htmlQuestion = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
    const questionArray = [htmlQuestion];
    expect(game.findByCategory('htmlCss')).toEqual(questionArray);
  });

  it('should find all questions by level', function() {
    const expectedArray = ['htmlCss', 'javascript', 'sql', 'csharp', 'ruby'];
    expect(game.findByLevel(1)).toEqual(expectedArray);
  });
});
