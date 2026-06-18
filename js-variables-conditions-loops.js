document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('demoOutput');
  const runDemo = document.getElementById('runDemo');

  runDemo.addEventListener('click', () => {
    const userName = 'Aisha';
    const userAge = 18;
    let score = 0;
    let message = '';

    if (userAge >= 18) {
      message += `Hello ${userName}, you are an adult.`;
      score += 10;
    } else {
      message += `Hello ${userName}, you are a minor.`;
      score += 5;
    }

    if (score >= 10) {
      message += ' Score is high enough to continue.';
    } else {
      message += ' Score is too low.';
    }

    message += '\n\nCounting from 1 to 5:';
    for (let i = 1; i <= 5; i++) {
      message += `\n- Step ${i}`;
    }

    const numbers = [2, 4, 6, 8, 10];
    message += '\n\nEven numbers in the array:';
    let index = 0;
    while (index < numbers.length) {
      message += `\n- ${numbers[index]}`;
      index++;
    }

    output.textContent = message;
  });
});
