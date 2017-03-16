import { cons } from 'hexlet-pairs';
import gameStart from '../game';


const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const makeTask = () => {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const numbers = `${num1} ${num2}`;

  const result = gcd(num1, num2);

  return cons(numbers, result);
};

export default () => {
  const greetingString = 'Find the greatest common divisor of given numbers.';

  gameStart(greetingString, makeTask);
};
