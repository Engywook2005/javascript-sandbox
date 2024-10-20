function getPermutations(str) {
    if (str.length <= 1) {
        return [str];
    }

    const permutations = new Set();

    for (let i = 0; i < str.length; i++) {
        // Get the current character
        const char = str[i];

        // Get the remaining string
        const remainingStr = str.slice(0, i) + str.slice(i + 1);

        // Recursively get permutations of the remaining string
        const remainingPermutations = getPermutations(remainingStr);

        // Add the current character to each of those permutations
        for (let perm of remainingPermutations) {
            permutations.add(char + perm);
        }
    }

    // Convert the set back to an array
    return Array.from(permutations);
}

export {getPermutations};
