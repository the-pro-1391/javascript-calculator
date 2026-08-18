// --- LOCAL STORAGE UPGRADE ---
// When the page loads, try to get the saved calculation from the browser's memory.
// If it is empty (the user's first time visiting), start with an empty string ('').
let calculation = localStorage.getItem('calculation') || '';

// Display whatever is in memory on the screen immediately
document.querySelector('.display').innerHTML = calculation;

function updateCalculation(value) {
  calculation += value;
  document.querySelector('.display').innerHTML = calculation;
  
  // Save the updated string to local storage every time a button is clicked
  localStorage.setItem('calculation', calculation);
}

function calculateResult() {
  // Evaluate the math equation
  calculation = eval(calculation);
  document.querySelector('.display').innerHTML = calculation;
  
  // Save the final answer to local storage
  localStorage.setItem('calculation', calculation);
}

// --- NEW CLEAR FUNCTION ---
function clearCalculation() {
  calculation = '';
  document.querySelector('.display').innerHTML = calculation;
  
  // Delete the memory from local storage so it actually resets
  localStorage.removeItem('calculation');
}