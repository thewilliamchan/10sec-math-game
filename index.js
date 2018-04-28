var seconds = 10;
var timer = null;
var answer = 0;
var currentScore = 0;
var highestScore = 0;
var generateEquation = function () {
  var numA = Math.floor((Math.random() * 10));
  var numB = Math.floor((Math.random() * 10));
  $(".equation").text(numA + " + " + numB);
  answer = numA + numB;
};
var startTimer = function () {
  if (!timer) {
    timer = setInterval(function () {
      $(".timer").html(--seconds);
      if (seconds === -1) {
        stopTimer();
      }
    }, 1000);
  }
};
var stopTimer = function () {
  window.clearInterval(timer);
  timer = null;
  seconds = 10;
  $(".timer").html(seconds);
  if (currentScore > highestScore) {
    highestScore = currentScore;
    $(".highest-score").html("Highest score: " + highestScore);
  }
  currentScore = 0;
  $(".current-score").html("Current score: " + currentScore);
};
var checkAnswer = function () {
  if (parseFloat($(".answer").val()) == answer) {
    $(".answer").val("");
    generateEquation();
    $(".timer").html(++seconds);
    $(".current-score").html("Current score: " + ++currentScore);
  }
};
$(window).on("load", function () {
  generateEquation();
});
$(document).on("keyup", ".answer", function () {
  startTimer();
  checkAnswer();
});
