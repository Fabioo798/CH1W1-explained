// clear everything on the screen
function clearScreen() {
  document.getElementById("result").value = "";
}

//display the values
function display(value) {
  document.getElementById("result").value += value;
}

//evaluates the expression and returns the final result
function calculate() {
  let expression = document.getElementById("result").value;
  let output = eval(expression);
  document.getElementById("result").value = output;
}
// creating a commit in the main , cambio en la rama
