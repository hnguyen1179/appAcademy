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