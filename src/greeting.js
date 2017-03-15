import readlineSync from 'readline-sync';

export default (gameTask) => {
  console.log('Welcome to the Brain Games!');
  if (!(gameTask === undefined)) {
    console.log(gameTask);
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};
