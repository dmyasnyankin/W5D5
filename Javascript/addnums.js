var rl = require('readline');
var readline = rl.createInterface(process.stdin, process.stdout, null);

function addNumbers(sum=0, numsLeft, completionCallback){
  if (numsLeft <= 0){
    completionCallback(sum);
    readline.close();
    process.stdin.destroy();
  }

  readline.question("Please input a number: ", function(answer) {
    sum = sum + parseInt(answer);
    console.log(`Running Sum: ${sum}`);
    addNumbers(sum, numsLeft - 1, completionCallback);
  });
}

//addNumbers();
 addNumbers(0, 13, sum => console.log(`Total Sum: ${sum}`));
