function coinPyramid(depth, valuePerStack = 1) {
    if(depth === 1) {
        return 1 * valuePerStack;
    }

    return (Math.pow(depth, 2) * valuePerStack) + coinPyramid((depth - 1), valuePerStack);
}

export {coinPyramid}