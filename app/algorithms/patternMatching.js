function naivePatternSearch(txt, pat) {
    const n = txt.length;
    const m = pat.length;
    const result = [];

    // Loop over the text to check each possible starting position
    for (let i = 0; i <= n - m; i++) {
        if(txt.substring(i, i + m) === pat) {
            result.push(i);
        }
    }

    return result;
}

// Function to create the LPS (Longest Prefix Suffix) array
function computeLPSArray(pat, m) {
    const lps = new Array(m).fill(0);
    let length = 0; // length of the previous longest prefix suffix
    let i = 1;

    // Preprocessing the pattern
    while (i < m) {
        if (pat[i] === pat[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1]; // fallback in the pattern
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// KMP pattern search algorithm
function KMPSearch(txt, pat) {
    const n = txt.length;
    const m = pat.length;
    const lps = computeLPSArray(pat, m);
    const result = [];

    let i = 0; // index for txt
    let j = 0; // index for pat

    while (i < n) {
        if (pat[j] === txt[i]) {
            i++;
            j++;
        }

        if (j === m) {
            result.push(i - j); // pattern found at index i - j
            j = lps[j - 1]; // fallback using the LPS array
        } else if (i < n && pat[j] !== txt[i]) {
            if (j !== 0) {
                j = lps[j - 1]; // fallback using the LPS array
            } else {
                i++; // move to the next character in the text
            }
        }
    }

    return result;
}

export {naivePatternSearch, KMPSearch}