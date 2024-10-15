function mergeIntervals(intervals) {
    // e.g. [[1,3],[2,6],[8,10],[15,18]]

    const result = [];

    // sort the intervals by their first value
    const sorted = [...intervals].sort((a, b) => a[0] - b[0]);

    let i = 0; 

    // Step through each interval.
    while(i < sorted.length) {
        // 
        const nextResult = [sorted[i][0], sorted[i][1]];

        // Then find the next interval whose beginning is before the end of sorted[i], but whose end is after sorted[i]
        for(let j = i; j < sorted.length; j++) {
            const current = sorted[i];
            const next = sorted[j];

            // If the next interval doesn't overlap, move along.
            if(next[0] > current[1]) {
                break;
            }
            // If the next interval falls completely within the current interval, skip it and don't look back. 
            else if(current[1] > next[1]) {
                i++;
            } 
            // Otherwise we may have an overlap. Confirm that; if we do we also don't need to check it again.
            else if(current[1] > next[0] && current[1] < next[1]) {
                nextResult[1] = next[1];
                i++;
            }

        }

        result.push(nextResult);

        i++;
    }

    return result;
} 

export {mergeIntervals};