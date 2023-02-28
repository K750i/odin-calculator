'use strict';

const display = document.querySelector('.display');
const buttons = document.querySelector('.buttons-wrapper');
const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const multiply = (n1, n2) => n1 * n2;
const divide = (n1, n2) => n1 / n2;
const operate = (op, n1, n2) => op(n1, n2);
const showResult = (v) => display.textContent = v;
let currentOperand;
let result = 0;
let operator;


buttons.addEventListener('click', function (e) {
  const value = e.target.dataset.value;
  if (value) {
    showResult(value);
    currentOperand = parseInt(value);
  }

  if (e.target.classList.contains('operator-add')) {
    if (currentOperand !== null) {
      operator = add;
      result = operate(operator, currentOperand, result);
      showResult(result);
      currentOperand = null;
    }
  }

  if (e.target.classList.contains('operator-sub')) {
    console.log(currentOperand);
  }

  if (e.target.classList.contains('operator-mul')) {
    console.log(currentOperand);
  }

  if (e.target.classList.contains('operator-div')) {
    console.log(currentOperand);
  }

  if (e.target.classList.contains('operator-eq')) {

  }
});