Array.prototype.bubbleSort = function() { 

    let unsorted = true;
    while (unsorted) {
        unsorted = false;
        for (let i = 0; i < this.length - 1; i++) {
            let num = this[i];
            let nextNum = this[i + 1];
            if(num > nextNum) {
                this[i] = nextNum;
                this[i + 1] = num;
                unsorted = true;
            }
        }
    }
    return this;
}

String.prototype.substrings = function() {
    let output = [];

    for (let i=0; i < this.length; i++) {
        for (let j=0; j < this.length+1; j++) {
            if (j > i) {
                output.push(this.slice(i, j));
            }
        }
    }

    return output;
}

