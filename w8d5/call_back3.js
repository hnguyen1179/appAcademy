const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback){
  reader.question(`Is ${el1} greater than ${el2}? \n` , (answer) => {
    if (answer.toLowerCase() === 'yes'){
      return callback(true);
    } else {
      return callback(false);
    }
  });
}

function callback(x){

}

// askIfGreaterThan(13, 14, (x) => {console.log(x); reader.close();});

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], outerBubbleSortLoop)
  }


}


function absurdBubbleSort(array, sortCompletionCallback) {

  


}