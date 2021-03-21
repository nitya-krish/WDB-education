const keys = document.getElementsByClassName("key");
const display = document.querySelector(".result");
let output = "0";
let total = 0;
let operator;

function keyClick(value) {
  if (value  == "C") {
      clear();
  } else if (value == "=") {
      equal();
  } else if (value == "←") {
      backspace();
  } else if (value == "+") {
      operator = value;
      output = "0";
  }
  else if (value == "-") {
      operator = value;
      output = "0";
  }
  else if (value == "×") {
      operator = value;
      output = "0";
  }
  else if (value == "÷") {
      operator = value;
      output = "0";
  }
  else {
      math(value);
  }
  set()
  
}

function set() {
  display.innerText = output;
}

function clear() {
  output = "0";
  total = 0;
}

function equal() {
  operator = null;
  output = +total;
  total = 0;
}

function backspace() {
  if (output.length === 1) {
      output = "0";
  } else {
      output = output.substring(0, output.length - 1);
  }
}

function math(num) {
  if (output === "0") {
      output = num; 
  } else {
      output += num;
  }
  if (operator === null || operator === undefined) {
      total = parseInt(output);
  } else {
      if (operator === "+") {
          add();
      } else if (operator === "-") {
          sub();
      } else if (operator === "×") {
          mul();
      } else if (operator === "÷"){
          div();
      }
  } 
  
}

function add(){
  if (output === "0") {
      return;
  }
  const num = parseInt(output);
  if (total == 0) {
      total = num;
  } else {
      total += num;
  }
  operator = null;
}

function sub() {
  if (output === "0") {
      return;
  }
  const num1 = parseInt(output);
  if (total == 0) {
      total = num1;
  } else {
      total -= num1;
  }
  operator = null;
}

function mul() {
  if (output === "0") {
      return;
  }
  const num1 = parseInt(output);
  if (total == 0) {
      total = num1;
  } else {
      total *= num1;
  }
  operator = null;
}

function div() {
  if (output === "0") {
      return;
  }
  const num1 = parseInt(output);
  if (total == 0) {
      total = num1;
  } else {
      total /= num1;
  }
  operator = null;
}

function main() {
    document.querySelector(".keys").addEventListener("click", function(event) {
      keyClick(event.target.innerText);
    });
}

main()
