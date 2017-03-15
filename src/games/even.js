import { cons } from 'hexlet-pairs';
import gameStart from '../game';


const task = () => {
  const num = Math.floor(Math.random() * 100);
  const isEven = (num % 2 === 0) ? 'yes' : 'no';
  return cons(num, isEven);
};


export default () => {
  const greetingString = 'Answer "yes" if number even otherwise answer "no".';

  gameStart(greetingString, task);
};
