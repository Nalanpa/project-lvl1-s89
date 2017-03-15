import { cons } from 'hexlet-pairs';
import gameStart from '../game';


export default () => {
  const greetingString = 'Answer "yes" if number even otherwise answer "no".';
  const task = () => {
    const num = Math.floor(Math.random() * 100);
    const isEven = (num % 2 === 0) ? 'yes' : 'no';
    return cons(num, isEven);
  };

  gameStart(greetingString, task);
};
