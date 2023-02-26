let result = document.getElementById("result");

function insert(num) {
  result.value += num;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let exp = result.value;
  if (exp) {
    result.value = eval(exp);
  }
}