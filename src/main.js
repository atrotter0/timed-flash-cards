import { Queston } from './question';
import { QuestionsHolder } from './questions-holder';
import { Game } from './game';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function toggleMainScreen() {
  $("#mainScreen").toggle();
}

function hideCategoryAndLevel() {
  $("#categorySelect").hide();
  $("#levelSelect").hide();
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
