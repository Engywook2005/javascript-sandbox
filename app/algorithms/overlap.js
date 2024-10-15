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
        for(let j = i + 1; j < sorted.length; j++) {
            const current = sorted[i];
            const next = sorted[j];

            // If the next interval doesn't overlap, move along.
            if(next[0] > current[1]) {
                break;
            }
            else if(current[1] > next[0]) {
                // Partial overlap, merge.
                if(current[1] < next[1]) {
                    nextResult[1] = next[1];
                }

                // Either way we skip the next interval. This would have the effect of absorbing the next interval if it is completely within the current interval.
                i++;
            } 
        }

        result.push(nextResult);

        i++;
    }

    return result;
} 

export {mergeIntervals};