function merge(arr, temp, leftStart, mid, rightEnd) {
    let i = leftStart;  // Starting index for the left subarray
    let j = mid;        // Starting index for the right subarray
    let k = leftStart;  // Index to store merged results in temp

    // * Data preservation is achieved because the merge function only copies data back into 
    // arr after sorting the elements in temp. At each step, the sorted elements are 
    // copied back to their correct position.
    // * By keeping track of the leftStart, mid, and rightEnd, the function knows which 
    // part of arr is being worked on and ensures the rest of the array remains unaffected 
    // until it’s time for its turn to be merged.

    // Merge the two subarrays into temp[]
    while (i < mid && j < rightEnd) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Drop elements into temp in numerical order
    // Copy any remaining elements from the left subarray
    while (i < mid) {
        temp[k++] = arr[i++];
    }

    // Copy any remaining elements from the right subarray
    while (j < rightEnd) {
        temp[k++] = arr[j++];
    }

    // Copy the merged elements back into the original array
    for (let i = leftStart; i < rightEnd; i++) {
        arr[i] = temp[i];
    }
}

function iterativeMergeSort(arr) {
    // Get the length of the array
    const n = arr.length;

    // Temporary array for merging - prevents overwriting elements in arr before they have been used.
    const temp = new Array(n);

    // Start with subarray size of 1 and increase it in powers of 2
    for (let size = 1; size < n; size *= 2) {

        // Traverse the array in pairs of subarrays of the current size
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {

            // Find the mid point and end point of the two subarrays
            // FIrst iteration: mid = 1
            const mid = Math.min(leftStart + size, n);

            // First iteration: rightEnd = 2
            const rightEnd = Math.min(leftStart + 2 * size, n);

            // [leftStart, mid, rightEnd]
            // SIZE = 1
            // [0, 1, 2]
            // [2, 3, 4]
            // [4, 5, 6]
            // [6, 7, 8]
            // SIZE = 2
            // [0, 2, 4]
            // [4, 6, 8]
            // SIZE = 4
            // [0, 4, 8]
            // If 9 elements: [8, 9, 9], then size 8 with [0, 8, 9]

            const vars = [leftStart, mid, rightEnd];

            console.log(`${size} ${vars}`);
            console.log(`temp is ${temp}`);
            console.log(`arr is ${arr}`);
 
            // Perform the merge operation on the subarrays. 
            // This uses the indices from leftstart, mid, and rightEnd to fill temp
            // temp in turn updates arr as it expands
            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

// Example usage:
// const exampleArray = [8, 4, 7, 3, 5, 2, 6, 1];
// const sortedArray = iterativeMergeSort(exampleArray);
// console.log(sortedArray);

export {iterativeMergeSort}
