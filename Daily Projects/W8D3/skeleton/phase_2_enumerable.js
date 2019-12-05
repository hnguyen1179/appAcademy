Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++ ) {
        callback(this[i]);
    }
}

Array.prototype.myMap = function(callback) {
    let newArray = [];

    this.myEach(function(banana) { 
        newArray.push(callback(banana)); 
    } );

    return newArray;
}

function double(num) {
    return num * 2;
}

Array.prototype.myReduce = function(callback, initialValue) {
    let acc;
    if (initialValue === undefined) {
        acc = this[0];
    }

    // let acc = initialValue;

    this.myEach(function(element) {
        if (initialValue === undefined) { 
            initialValue = 'something';
        } else {
            acc = callback(acc, element);
        }
    });

    return acc;
}

console.log([1, 2, 3, 4].myReduce(function (acc, el) {
    return acc + el;
}));