let input = '';
let result = '';

function handleButtonClick(value) {
  if (value === '=') {
    try {
      result = eval(input);
      document.getElementById('result').textContent = result;
    } catch {
      result = 'Error';
      document.getElementById('result').textContent = result;
    }
  } else if (value === 'C') {
    input = '';
    result = '';
    document.getElementById('input').textContent = input;
    document.getElementById('result').textContent = result;
  } else {
    input += value;
    document.getElementById('input').textContent = input;
  }
}