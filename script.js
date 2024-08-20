'use strict';

const container = document.querySelector('.container');
const calcInput = document.querySelector('.calc__input');

container.addEventListener('click', function (e) {
  if (e.target.nodeName == 'BUTTON') {
    calcInput.value = calcInput.value + e.target.innerHTML;
  }

  if (e.target.innerHTML == 'C') {
    calcInput.value = '';
  }

  if (e.target.innerHTML == '=') {
    eval(calcInput.value);
  }
});
