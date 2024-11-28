let expression = '';

function append(value) {
  expression += value;
  document.getElementById('display').value = expression;
}

function calculate() {
  try {
    expression = eval(expression);
    document.getElementById('display').value = expression;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').value = '';
}