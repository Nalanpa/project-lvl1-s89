const readlineSync = require('readline-sync');

export default function () {
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
}
