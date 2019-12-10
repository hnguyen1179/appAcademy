function sum(...args){
  let arr = Array.from(args);
  let sum = 0;
  arr.forEach(
    function(el){
      sum += el;
    }
  );
  return sum;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

Function.prototype.myBind = function(ctx){
  let that = this;
  return function(){
    return that.apply(ctx);
  };
}

// Function.prototype.myBind = function(ctx){
//   let that = this;
//   let args = Array.from(arguments).slice(1);
//   return function () {
//     let arg1 = Array.from(arguments);
//     return that.apply(ctx,args.concat(arg1));
//   };
// }


Function.prototype.myBind = function (ctx, ...arg1) {
  let that = this;
  return function (...arg2) {
    return that.apply(ctx, arg1.concat(arg2));
  };
}


class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");




// function curriedSum(numArgs) {
//   let numbers = [];

//   return function _curriedSum(number) {
//     numbers.push(number);
//     if (numbers.length === numArgs) { 
//       let sum = 0;
//       numbers.forEach( function(ele) {
//         sum += ele;
//       });
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   };
// }

Function.prototype.curry = function(numArgs) {
  let numbers = [];
  let that = this;
  return function _curriedSum(...args) {
    numbers.push(args[0]);
    if (numbers.length === numArgs) {
      return that.apply(null, numbers);
    } else {
      return _curriedSum;
    }
  };
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
// let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30