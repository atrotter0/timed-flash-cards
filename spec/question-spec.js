import { Question } from './../src/question';

describe('Question', function() {
  let question;

  beforeEach(function() {
    question = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
  });

  it('should test the constructor instantiates all properties of the Question object', function() {
    const expectedResult = new Question(1, 100, 'HTML/CSS', 'What is a Div?', 'A container unit that encapsulates other page elements and divides the HTML document into sections.');
    expect(question).toEqual(expectedResult);
  });
});
