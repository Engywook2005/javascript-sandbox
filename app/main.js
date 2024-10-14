function deepFlatten(inputObj = []) {
    const returnedArr = [];

    const doFlatten = function(input) {
        // If it's an array, try to flatten each element in the array.
        if(Array.isArray(input)) {
            input.forEach(element => {
                doFlatten(element);
            })
        }
        // If it's an object, iterate through the object keys and try to flatten each value
        else if(typeof input === 'object') {
            for (const [key, value] of Object.entries(input)){
                doFlatten(value);
            };
        }
        // If it's a primitive, add to returnedArr
        else if(Object(input) !== input) {
            returnedArr.push(input)
        }
    }

    doFlatten(inputObj);

    return returnedArr;
}

const input = [
    1,
    { a: 2, b: [3, 4] },
    [5, { c: 6, d: [7, 8] }],
    9
]

console.log(deepFlatten(input));