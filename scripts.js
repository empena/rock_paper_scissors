$('document').ready(function(){
  var options = ["Rock", "Paper", "Scissors"];
  var randomOption = options[Math.floor(Math.random() * options.length)];
  document.getElementById('Random').innerHTML = "Computer picked " + randomOption;
})
