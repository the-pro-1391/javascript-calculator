let calculation = localStorage.getItem('calculation') || '';

// CHANGED: innerHTML is now textContent
document.querySelector('.display').textContent = calculation;

function updateCalculation(value) {
  calculation += value;
  // CHANGED: innerHTML is now textContent
  document.querySelector('.display').textContent = calculation;
  
  localStorage.setItem('calculation', calculation);
}

function calculateResult() {
  calculation = eval(calculation);
  // CHANGED: innerHTML is now textContent
  document.querySelector('.display').textContent = calculation;
  
  localStorage.setItem('calculation', calculation);
}

function clearCalculation() {
  calculation = '';
  // CHANGED: innerHTML is now textContent
  document.querySelector('.display').textContent = calculation;
  
  localStorage.removeItem('calculation');
}
