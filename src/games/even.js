import { cons } from 'hexlet-pairs';
import gameStart from '../game';


const makeTask = () => {
  const num = Math.floor(Math.random() * 100);
  const correctAnswer = (num % 2 === 0) ? 'yes' : 'no';
  return cons(num, correctAnswer);
};


export default () => {
  const greetingString = 'Answer "yes" if number even otherwise answer "no".';

  gameStart(greetingString, makeTask);
};
