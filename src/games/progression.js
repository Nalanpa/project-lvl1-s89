import { cons } from 'hexlet-pairs';
import gameStart from '../game';


const task = () => {
  const progLength = 10;
  const init = Math.floor(Math.random() * 100);
  const diff = Math.floor(Math.random() * 10);
  const skipped = Math.floor(Math.random() * progLength);

  let progStr = '';

  for (let i = 0; i < progLength; i += 1) {
    progStr += (i === skipped - 1) ? ' .. ' : ` ${init + (i * diff)} `;
  }

  return cons(progStr, init + ((skipped - 1) * diff));
};


export default () => {
  const greetingString = 'What number is missing in this progression?';

  gameStart(greetingString, task);
};
