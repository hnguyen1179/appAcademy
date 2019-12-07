const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// // This is a callback function called in the main function
// function _responseParser() {
//   this.response
// }

function addNumbers(numsLeft, completionCallback, sum = 0) {
  let response;

  if (numsLeft === 0) { 
    return completionCallback(sum);
  }

  if (numsLeft > 0) {
    reader.question('Give me a number! ', (answer) => {
      response = parseInt(answer);
      sum += response;  
      console.log(sum);
      return addNumbers(numsLeft - 1, completionCallback, sum);
    });
  }
}

addNumbers(3, function(sum) { console.log(`Total Sum: ${sum}`);
reader.close();
});