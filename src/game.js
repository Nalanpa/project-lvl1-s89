import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import greeting from './greeting';


const isPassed = (task) => {
  const newTask = task();
  const taskQuestion = car(newTask);
  const correct = String(cdr(newTask));
  const userAnswer = readlineSync.question(`Question: ${taskQuestion}\nYour answer: `);

  if (userAnswer !== correct) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correct}'.\n`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const isAllPassed = (task) => {
  const questionsCount = 3;

  let correct = true;
  for (let i = 1; i <= questionsCount; i += 1) {
    if (!isPassed(task)) {
      correct = false;
      break;
    }
  }
  return correct;
};

// ////////////////////////////////////////////////////

export default (greetingString, task) => {
  const userName = greeting(greetingString);

  if (isAllPassed(task)) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
