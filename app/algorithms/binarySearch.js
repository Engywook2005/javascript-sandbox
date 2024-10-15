function binarySearch(array, target, left = 0, right = array.length - 1) {
    if (left > right) {
        // Base case: target not found
        return -1;
    }

    // Find the middle index
    const mid = Math.floor((left + right) / 2);

    // Check if the target is at the middle index
    if (array[mid] === target) {
        return mid; // Target found
    }

    // Recursively search in the left half or right half
    if (target < array[mid]) {
        return binarySearch(array, target, left, mid - 1); // Search in the left half
    } else {
        return binarySearch(array, target, mid + 1, right); // Search in the right half
    }
}