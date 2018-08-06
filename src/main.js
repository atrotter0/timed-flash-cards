import { Queston } from './question';
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
}

function playByLevel(level) {
  const questionsArray = game.findByLevel(level);
  buildCards(questionsArray);
}

function playWithAll() {
  buildCards(game.getAllQuestions());
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
    //show cards
  });

  $(".backBtn").click(function() {
    toggleMainScreen();
    hideCategoryAndLevel();
  });
});
