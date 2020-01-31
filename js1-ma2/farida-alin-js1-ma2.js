// question 1
const myFunctionExpression = function() {
  console.log("Farida");
};

myFunctionExpression();

// question 2
const button = document.querySelector(".btn");
button.addEventListener("click", buttonClicked);

function buttonClicked() {
    console.log('I was clicked');
}

// question 3
const inputField = document.querySelector("#firstName");
inputField.addEventListener("keydown", valueOfKeydown);

function valueOfKeydown() {
  console.dir(event.target.value);
}

// question 4
const buttonHover = document.querySelector("button");
buttonHover.addEventListener("mouseover", addHover);

function addHover() {
  buttonHover.classList.add("hover");
}

// question 5
const buttonData = document.querySelector('[data-animal="dog"]');

buttonData.addEventListener("mouseout", removeHover);

function removeHover() {
  buttonData.classList.remove("hover");
}

// question 6
const list = document.querySelectorAll("li");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("mouseover", printOutDataValue);
}

function printOutDataValue(event) {
  const listDataValue = event.target.dataset.animal;
  console.log(listDataValue);
}

// question 7
const animal = "cow";

switch (animal) {
  case "cat":
    console.log("Meow");
    break;
  case "cow":
    console.log("Moo");
    break;
  case "bird":
    console.log("Tweet");
    break;
  default:
    console.log("Harrumph");
}

// question 8
const sheep = ["Malcom", "Anders", "Marie"];

sheep.forEach(function(sheeps) {
  console.log(sheeps);
});

// question 9
let counter = 0;

function logTime() {
  console.log("Hello");
  if (counter === 5) {
    clearInterval(interValId);
  }
  counter++;
};

const interValId = setInterval(logTime, 500);

// // question 10
const divContainer = document.querySelector(".container");

let newContent = "Text updated";

setTimeout(function() {
  divContainer.innerHTML = newContent;
}, 2000);

