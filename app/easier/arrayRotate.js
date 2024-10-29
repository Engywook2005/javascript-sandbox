function rotateArray(arr, shiftBy) {
    const shiftedArray = arr.splice(-shiftBy, shiftBy);

    return [...shiftedArray, ...arr];
}