function sumToN(n) {
    if(n === 0) {
        return 0;
    }

    return sumToN(n - 1) + n;
}

export { sumToN };