import { cons } from 'hexlet-pairs';
import gameStart from '../game';


export default () => {
  const greetingString = 'What is the result of the expression?';

  const task = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    let operation;
    let result;
    switch (Math.floor(Math.random() * 3) + 1) {
      case 1:
        operation = `${num1} + ${num2}`;
        result = num1 + num2;
        break;
      case 2:
        operation = `${num1} - ${num2}`;
        result = num1 - num2;
        break;
      case 3:
        operation = `${num1} * ${num2}`;
        result = num1 * num2;
        break;
      default:
        console.log('Something wrong');
    }

    return cons(operation, result);
  };

  gameStart(greetingString, task);
};
