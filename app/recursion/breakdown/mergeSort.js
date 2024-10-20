// Merge two sorted arrays into one sorted array
function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from both arrays and push the smaller element to result
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++; // Move the pointer in the left array
        } else {
            result.push(right[rightIndex]);
            rightIndex++; // Move the pointer in the right array
        }
    }

    // Concat the remaining elements (if any) in both arrays
    return result
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
}

// Recursive merge sort function
function mergeSort(array) {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (array.length <= 1) {
        return array;
    }

    // Split the array in half
    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);


    // Recursively split & sort the left and right halves, then merge them
    const merged = merge(mergeSort(left), mergeSort(right))

    console.log(merged);

    return merged;
}

export {mergeSort}