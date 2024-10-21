function gridPaths(m, n) {
    if(m === 1 || n === 1) {
        return 1;
    }
    
    return sumPaths(m, n - 1) + sumPaths(n, m - 1);
}