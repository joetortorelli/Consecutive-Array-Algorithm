let sample = [1, 4, 13, 15, 12, 2, 3, 5, 6, 9, 10, 11, 14];
console.log(consecutive(sample));
function consecutive(input) {
    let max = 0;
    let hashSet = new Object();
    for (let i = 0; i < input.length; i++)
        hashSet[input[i]] = input[i];
    for (let prop in hashSet) { 
        if (hashSet[prop-1]) continue
        let len = 0;
        while (hashSet[prop++])
            len++;
        max = Math.max(max, len);
    }
    return max;
}