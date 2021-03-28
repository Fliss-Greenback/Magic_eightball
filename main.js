let userName = 'Fliss';
userName ? console.log('Hello ' + userName)
: console.log('Hello!');

let userQuestion = 'will everything please stick in my brain immediately please?';
console.log(userName + ' you asked the magic eight ball ' + userQuestion)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';
switch (randomNumber) {
  case 0:
  eightBall = 'My sources say no';
  break;
  case 1:
  eightBall = 'Outlook not so good';
  break;
  case 2:
  eightBall = 'It is certain';
  break;
  case 3:
  eightBall = 'Reply hazy try again';
  break;
  case 4:
  eightBall = 'Cannot predict now';
  break;
  case 5:
  eightBall = 'It is decidedly so';
  break;
  case 6:
  eightBall = 'Do not count on it';
  break;
  case 7:
  eightBall = 'Signs point to yes';
  break;
  case 8:
  eightBall = 'It is certain'
}
console.log(eightBall)

