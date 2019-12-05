Array.prototype.uniq = function() {
    let array = [];
    for (let i = 0; i < this.length; i++) {
        if (!array.includes(this[i])) {
            array.push(this[i]);
        }
    }
    return array;
};

Array.prototype.twoSum = function() {
    let array = [];
    // let i = 0;
    // let j = 1;
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i; j < this.length; j++) {
            if ((this[i] + this[j] === 0) && (i != j)) {
                array.push([i, j]);
            }
        }
    }
    return array;
};

Array.prototype.transpose = function() { 
    let array = [];
    
    for (let column = 0; column < this[0].length; column++)  {
        array[column] = [];
        for (let row = 0; row < this.length; row++) {
            array[column][row] = this[row][column];
        }
    }

    return array;
}