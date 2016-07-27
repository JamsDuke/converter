var submitBtn =
var clearBtn =
var userInput = document.getElementById("userInput")
var tempOutput
var tempType =

userInput.addEventListener("keyup", checkKey)
submitBtn.addEventListener("click")

function checkKey(e){
  if(e.keycode === 13){

  }
}

function validate(){
  alert("Please type a temperature")
}

function toCelsius () {

}

function toFahrenheit () {

}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);