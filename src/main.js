import { Question } from './question';
import { QuestionsHolder } from './questions-holder';
import { Game } from './game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const game = new Game();
let interval;

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
  $(".card").toggle();
}

function toggleResults() {
  $("#testResults").toggle();
}

function toggleTimer() {
  $('#timer').toggle();
}

function showTimer() {
  $('#timer').show();
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
  startTimer();
}

function updateTimer() {
  $('#timerDisplay').text(game.timer);
}

function startTimer() {
  game.resetTimer();
  clearInterval(interval);
  updateTimer();
  interval = setInterval(() => {
    game.timer--;
    updateTimer();
    if (game.timer === 0){
      toggleAnswerSection();
      toggleTimer();
      clearInterval(interval);
    }
  }, 1000);
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

function showResults() {
  loadResults();
  toggleCards();
  toggleResults();
}

function loadResults() {
  loadQuestionResults(game.correctQuestions, "#correctResults");
  loadQuestionResults(game.wrongQuestions, "#incorrectResults");
  displayScoreResults();
}

function loadQuestionResults(questionsArray, id) {
  let questionText = "";
  questionsArray.forEach(function(question) {
    questionText += question.text + "</br>";
  });
  $(id).append(questionText);
}

function displayScoreResults() {
  $("#scoreResults").text("Total Score: " + game.score);
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

  $("#showAnswer").click(function() {
    toggleAnswerSection();
  });

  $("#correct").click(function() {
    if (game.currentQuestionIndex === (game.deck.length -1)) {
      runCorrectQuestion();
      showResults();
    } else {
      nextCard();
      runCorrectQuestion();
      toggleAnswerSection();
      showTimer();
    }
  });

  $("#wrong").click(function() {
    if (game.currentQuestionIndex === (game.deck.length -1)) {
      runWrongQuestion();
      showResults();
    } else {
      nextCard();
      runWrongQuestion();
      toggleAnswerSection();
      showTimer();
    }
  });
});
