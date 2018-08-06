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
  startGame();
}

function playByLevel(level) {
  console.log(game.questions);
  const questionsArray = game.findByLevel(level);
  buildCards(questionsArray);
  startGame();
}

function playWithAll() {
  buildCards(game.getAllQuestions());
  startGame();
}

function startGame(){
  let question = game.deck[0];
  displayQuestion(question);
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
    playWithAll();
  });

  $(".backBtn").click(function() {
    toggleMainScreen();
    hideCategoryAndLevel();
  });

  $("#playCategory").click(function() {
    const category = $("#selectCategory").val();
    playByCategory(category);
  });

  $("#playLevel").click(function() {
    const level = $("#selectLevel").val();
    console.log(level);
    playByLevel(level);
  });
});
