// https://gist.github.com/RuolinZheng08/cdd880ee748e27ed28e0be3916f56fa6
// https://www.youtube.com/watch?v=ngCos392W4w - recursion in five simple steps

function isValidState(state) {
    // check if it is a valid solution
    return true;
}

function getCandidates(state) {
    return [];
}

function search(state, solutions) {
    if (isValidState(state)) {
        solutions.push(new Set(state)); // Store a copy of the current state
        // return;
    }

    for (const candidate of getCandidates(state)) {
        state.add(candidate);
        search(state, solutions);
        state.delete(candidate);
    }
}

function solve() {
    const solutions = [];
    const state = new Set();
    search(state, solutions);
    return solutions;
}
