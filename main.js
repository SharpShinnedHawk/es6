$(document).ready(function() {

var cards= [
  {question: "What is the arrow function?", answer: 'The arrow function is a more concise syntax for writing function expressions. They utilize a new token, =>. Arrow functions are anonymous and change the way this binds in functions.'},
  {question: "What is Webpac", answer: "Goood question"},
  {question:"knows javascript", answer:"nope"}
]
var i = 0

function clearCards() {
  $(".question").empty()
  $(".answer").empty()
}

function randomizeCards() {
  i += 1
  if (i>= cards.length){
    i=0
  }
}

$(".Next-Button").on("click", function() {
  clearCards()
  randomizeCards()
  var p= "<p class='question'>" + cards[i].question + "</p>"
  $('.flashcard').append(p)
})

$(".Answer-Button").on("click", function() {
  var p= "<p class='answer'>" + cards[i].answer + "</p>"
  $('.flashcard').append(p)
})

})
