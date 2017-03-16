import readlineSync from './';

export default (greetingString) => {
  console.log('Welcome to the Brain Games!');
  if (!(greetingString === undefined)) {
    console.log(greetingString);
  }

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  return userName;
};
