function checkPower2(num) {
    if(num < 1) {
        return false;
    }

    while(num % 2 === 0) {
        num /= 2;
    }

    return num === 1;
}

function findSingle(arr) {
    const singles = new Set();

    for(let i = 0; i < arr.length; i++) {
        if(singles.has(arr[i])) {
            singles.delete(arr[i]);
        } else {
            singles.add(arr[i]);
        }
    }

    return Array.from(singles)[0];
}