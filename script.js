// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;

// 1. Saving elements as variables cleans up your code.

var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var minus1Btn = document.getElementById("minus1");
var minus10btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
plus1Btn.addEventListener("click", add1);
plus10Btn.addEventListener("click", add10);
plus50Btn.addEventListener("click", add50);
minus1Btn.addEventListener("click", sub1);
minus10btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);

function add1() {
  counter = counter + 1;
  displayEl.innerHTML = counter;
}

function add10() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function add50() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}

function sub1() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);

var story = "Once upon a time, ";

function updateStory() {
  var newWord = stringInEl.value;

  stringInEl.value = "";

  story += newWord + " ";

  stringOutEl.innerHTML = story;
}

// 4. Math.random() is used to bring RNG (random number generator) to your applications.
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutEl = document.getElementById("rand1-out");
var rand2OutEl = document.getElementById("rand2-out");
var rand3OutEl = document.getElementById("rand3-out");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  rand = rand.toFixed(3);
  rand1OutEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand = Math.random() * 100;
  rand = Math.floor(rand);
  rand2OutEl.innerHTML = rand;
}

rand3Btn.addEventListener("click", showRand3);
function showRand3() {
  var rand = Math.random();
  rand = rand * 10 - 5;
  rand = rand.toFixed(3);
  rand3OutEl.innerHTML = rand;
}
document.getElementById("rand4").addEventListener("click", function () {
  var min = parseInt(document.getElementById("rand-in1").value);
  var max = parseInt(document.getElementById("rand-in2").value);
  showRandInRange(min, max);
});

function showRandInRange(min, max) {
  var rand = Math.random() * (max - min) + min;
  rand = Math.floor(rand);
  document.getElementById("rand4-out").innerHTML = rand;
}

//last buttons

document.getElementById("random-rgb").addEventListener("click", colorchange);

function colorchange() {
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); //i used chatgpt to help me make this
  document.body.style.backgroundColor = randomColor;
}

document.getElementById("reset").addEventListener("click", resetP);

function resetP() {
  location.reload();
}
