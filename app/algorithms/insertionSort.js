// O(n^2)

function insertionSort(arr) {

    // Work left to right.
    // We are starting at the second position because we are comparing to the item on the left.
    for (let i = 1; i < arr.length; i++) {
        
      let currentValue = arr[i];

      // Find the starting point for checking whether to shift things down
      let j = i - 1;

      // Go through and compare values working back to the left until we hit the first element 
      // or until we hit an element that has a lower value than our current element.
      while (j >= 0 && arr[j] > currentValue) {
        arr[j + 1] = arr[j];
        j--;
      }

      // Our value of j tells us where to put the element.
      arr[j + 1] = currentValue;
    }
    return arr;
  }
  
  // Example usage:
//   const array = [5, 2, 9, 1, 5, 6];
//   console.log(insertionSort(array));
  // Output: [1, 2, 5, 5, 6, 9]
  