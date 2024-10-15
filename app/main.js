import {naivePatternSearch} from './algorithms';

// Example usage:
const text = "ABAAABCDBABC";
const pattern = "ABC";
const matches = naivePatternSearch(text, pattern);

console.log(matches); // Output: [4, 9]
