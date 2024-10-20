function removeDuplicates(arr) {
    const visited = new Set();
    const output = [];

    arr.forEach((el) => {
        if(!visited.has(el)) {
            visited.add(el);
            output.push(el);
        }
    });

    return output;
}

function removeDuplicatesLimited(arr, limit) {
    const visited = new Map();
    const output = [];

    if(limit === 0) {
        return output;
    }

    arr.forEach((el) => {
        const count = visited.get(el) || 0;
        if(count < limit) {
            output.push(el);
        }
        visited.set(el, count + 1);
    })

    return output;
}

export {removeDuplicates, removeDuplicatesLimited};