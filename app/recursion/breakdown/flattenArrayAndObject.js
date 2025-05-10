function flattenArrayAndObject(el) {
    // If a primitive, return that

    const unbreakables = new Set(['number', 'string', 'boolean', 'function', 'undefinied', 'null'])

    if(unbreakables.has(typeof el)) {
        return [el]
    } 

    // Otherwise, start with an empty array which will be filled and returned
    // Determine if el is an array or an object
    // If an array, call flattenArrayAndObject with it and push into our array
    // If an object, make that anto an array, then call flattenArrayAndObject with it and push into our array 
    let output = [];
    const destructuring = Array.isArray(el) ? el : Object.values(el);

    destructuring.forEach((item) => {
        output = output.concat(flattenArrayAndObject(item));
    });

    return output;
}

export {flattenArrayAndObject}