#!/usr/bin/env node

import readlineSync from '../';

console.log('Welcome to the Brain Games!',
  '\nAnswer "yes" if number even otherwise answer "no".\n');

const userName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${userName}!\n`);


const askQuestion = () => {
  const question = Math.floor(Math.random() * 100);
  const correctAnswer = (question % 2 === 0) ? 'yes' : 'no';
  const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

  if (answer !== correctAnswer) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const quiz = () => {
  let correct = true;

  for (let i = 1; i <= 3; i += 1) {
    if (!askQuestion()) {
      correct = false;
      break;
    }
  }
  return correct;
};

if (quiz()) {
  console.log(`Congratulations, ${userName}!\n`);
} else {
  console.log(`Let's try again, ${userName}!\n`);
}
