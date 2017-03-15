import readlineSync from 'readline-sync';
import greeting from './greeting';

export default () => {
  const userName = greeting('What is the result of the expression?');

  console.log(userName);
};
