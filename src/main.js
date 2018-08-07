import { Question } from './question';
import { QuestionsHolder } from './questions-holder';
import { Game } from './game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const game = new Game();

function toggleMainScreen() {
  $("#mainScreen").toggle();
}

function toggleAnswerSection() {
  $('#answerSection').toggle();
}

function toggleJumbotron() {
  $(".jumbotron").toggle();
}

function toggleCards() {
  $(".card").show();
}

function hideCategoryAndLevel() {
  $("#categorySelect").hide();
  $("#levelSelect").hide();
}

function buildCards(questionsArray) {
  const shuffledArray = [];
  while(questionsArray.length > 0){
    let randomNumber = Math.floor((Math.random() * questionsArray.length));
    let question = questionsArray[randomNumber];
    shuffledArray.push(question);
    questionsArray.splice(randomNumber, 1);
  }
  game.deck = shuffledArray;
}

function playByCategory(category) {
  const questionsArray = game.findByCategory(category);
  buildCards(questionsArray);
  runGame();
}

function playByLevel(level) {
  const questionsArray = game.findByLevel(level);
  buildCards(questionsArray);
  runGame();
}

function playWithAll() {
  buildCards(game.getAllQuestions());
  runGame();
}

function runGame(){
  if (game.currentQuestion.length > 0) game.currentQuestion = [];

  let question = game.deck[game.currentQuestionIndex];
  game.currentQuestion.push(question);
  displayQuestion(question);
}

function nextCard() {
  game.currentQuestionIndex++;
  runGame();
}

function runCorrectQuestion() {
  let points = game.currentQuestion[0].points;
  game.correctQuestions.push(game.currentQuestion[0]);
  game.plusScore(points);
}

function runWrongQuestion() {
  let points = game.currentQuestion[0].points;
  game.wrongQuestions.push(game.currentQuestion[0]);
  game.minusScore(points);
}

function displayQuestion(question) {
  $("#question-category").text(question.category);
  $("#question-text").text(question.text);
  $("#question-answer").text(question.answer);
}

$(document).ready(function() {
  $("#categoryBtn").click(function() {
    toggleMainScreen();
    $("#categorySelect").show();
  });

  $("#levelBtn").click(function() {
    toggleMainScreen();
    $("#levelSelect").show();
  });

  $("#allBtn").click(function() {
    toggleMainScreen();
    toggleJumbotron();
    toggleCards();
    playWithAll();
  });

  $(".backBtn").click(function() {
    toggleMainScreen();
    hideCategoryAndLevel();
  });

  $("#playCategory").click(function() {
    toggleJumbotron();
    toggleCards();
    const category = $("#selectCategory").val();
    playByCategory(category);
  });

  $("#playLevel").click(function() {
    toggleJumbotron();
    toggleCards();
    const level = $("#selectLevel").val();
    playByLevel(level);
  });

  $("#show").click(function() {
    toggleAnswerSection();
  });

  $("#correct").click(function() {
    nextCard();
    runCorrectQuestion();
    toggleAnswerSection();
  });

  $("#wrong").click(function() {
    nextCard();
    runWrongQuestion();
    toggleAnswerSection();
  });



});
