'use strict';

const container = document.querySelector('.container');
const calcInput = document.querySelector('.calc__input');
const btnAC = document.querySelector('.AC');

container.addEventListener('click', function (e) {
  const btnValue = e.target.innerHTML;

  console.log(btnValue);

  if (e.target.nodeName === 'BUTTON') {
    btnAC.textContent = 'C';

    if (btnValue === 'C' ?? 'AC') {
      calcInput.value = '';
    } else if (btnValue === '=') {
      try {
        const expression = calcInput.value
          .replaceAll('X', '*')
          .replaceAll('÷', '/');
        const val = eval(expression);

        calcInput.value = val;
      } catch {
        calcInput.value = 'Error';
      }
    } else if (btnValue === '%') {
      calcInput.value = calcInput.value / 100;
    } else {
      calcInput.value += btnValue;
    }
  }
});
