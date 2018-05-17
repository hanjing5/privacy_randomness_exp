var pwdG = require('password-generator');

var n = 155000;
while (n > 0) {
  console.log(pwdG());
  n-=1;
}
