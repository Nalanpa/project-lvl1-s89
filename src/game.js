import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';
import greeting from './greeting';


const askQuestion = (task) => {
  const newTask = task();
  const taskQuestion = car(newTask);
  const correct = String(cdr(newTask));
  const answer = readlineSync.question(`Question: ${taskQuestion}\nYour answer: `);

  if (answer !== correct) {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correct}'.\n`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const quiz = (task) => {
  let correct = true;
  const questionsCount = 3;

  for (let i = 1; i <= questionsCount; i += 1) {
    if (!askQuestion(task)) {
      correct = false;
      break;
    }
  }
  return correct;
};

// ////////////////////////////////////////////////////

export default (greetingString, task) => {
  const userName = greeting(greetingString);

  if (quiz(task)) {
    console.log(`Congratulations, ${userName}!\n`);
  } else {
    console.log(`Let's try again, ${userName}!\n`);
  }
};
