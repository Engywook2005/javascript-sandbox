function merge(arr, temp, leftStart, mid, rightEnd) {
    let i = leftStart;  // Starting index for the left subarray
    let j = mid;        // Starting index for the right subarray
    let k = leftStart;  // Index to store merged results in temp

    // Merge the two subarrays into temp[]
    while (i < mid && j < rightEnd) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

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
    // Temporary array for merging
    const temp = new Array(n);

    // Start with subarray size of 1 and increase it in powers of 2
    for (let size = 1; size < n; size *= 2) {

        debugger;
        // Traverse the array in pairs of subarrays of the current size
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            // Find the mid point and end point of the two subarrays
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + 2 * size, n);
            // Perform the merge operation on the subarrays
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
