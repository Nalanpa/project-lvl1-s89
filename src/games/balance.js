import { cons } from 'hexlet-pairs';
import gameStart from '../game';

const balance = (num) => {
  const digitsCount = String(num).length;

  let digitsSum = 0;
  for (let i = 0; i < digitsCount; i += 1) {
    digitsSum += Number(String(num).substr(i, 1));
  }

  const minDigit = Math.floor(digitsSum / digitsCount);
  const minDigitCount = digitsCount - (digitsSum - (minDigit * digitsCount));

  let digitsStr = '';
  for (let i = 0; i < digitsCount; i += 1) {
    digitsStr += String(i < minDigitCount ? minDigit : minDigit + 1);
  }

  return Number(digitsStr);
};


const task = () => {
  const maxNumber = 10000;
  const num = Math.floor(Math.random() * maxNumber);
  const balanced = balance(num);

  return cons(num, balanced);
};


export default () => {
  const greetingString = 'Balance the given number.';
  gameStart(greetingString, task);
};
