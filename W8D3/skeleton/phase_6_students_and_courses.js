function subsets(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let sub = [];
        // result.push(sub);
        for (let j = i; j < arr.length; j++) {
            sub.push(arr[j]);
        }
        result.push(sub);
    }
    return result;
};

let sub1 = [1, 2, 3];
// [1] [1, 2] [1, 2, 3] [2] [2, 3] [3]

console.log(subsets(sub1));

Function.prototype.myBind = function(context) {
    let that = context; 
    let args1 = Array.from(arguments).slice(1);
    return function() {
        let args2 = arguments;
        return that.apply(context, args1.concat(args2));
    }
}

Function.prototype.curry = function(numArgs) {
    let that = this;
    let output = [];

    return function _curriedFunction(element) {
        output.push(element);
        if (output.length === numArgs) {
            return that.apply(null, output);
        } else {
            return _curriedFunction;
        }
    }
}