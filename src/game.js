import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import greet from './greet';


const askQuestion = (makeTask) => {
  const newTask = makeTask();
  const taskQuestion = car(newTask);
  const correctAnswer = String(cdr(newTask));
  const userAnswer = readlineSync.question(`Question: ${taskQuestion}\nYour answer: `);

  if (userAnswer !== correctAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n`);
    return 'failed';
  }

  console.log('Correct!');
  return 'passed';
};

const isAllPassed = (makeTask) => {
  const questionsCount = 3;

  let passed = true;
  let result;
  for (let i = 1; i <= questionsCount; i += 1) {
    result = askQuestion(makeTask);
    if (result !== 'passed') {
      passed = false;
      break;
    }
  }
  return passed;
};

// ////////////////////////////////////////////////////

export default (greetingString, makeTask) => {
  const userName = greet(greetingString);

  if (isAllPassed(makeTask)) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
