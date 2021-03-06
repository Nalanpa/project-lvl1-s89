import { cons } from 'hexlet-pairs';
import gameStart from '../game';


const isPrime = (n) => {
  if (n === 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const makeTask = () => {
  const maxNumber = 1000;
  const num = Math.floor(Math.random() * maxNumber);

  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';

  return cons(num, correctAnswer);
};

export default () => {
  const greetingString = 'Answer "yes" if number prime otherwise answer "no".';

  gameStart(greetingString, makeTask);
};
