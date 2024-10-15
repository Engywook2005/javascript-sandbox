function naivePatternSearch(txt, pat) {
    const n = txt.length;
    const m = pat.length;
    const result = [];

    // Loop over the text to check each possible starting position
    for (let i = 0; i <= n - m; i++) {
        let j;

        // Check if the pattern matches at position i
        for (j = 0; j < m; j++) {
            if (txt[i + j] !== pat[j]) {
                break; // Mismatch found, move to the next position
            }
        }

        // If the pattern matches completely, record the index
        if (j === m) {
            result.push(i);
        }
    }

    return result;
}