function arraySum(el) {
    if(Array.isArray(el)) {
        let total = 0;

        el.forEach((item) => {
            total += arraySum(item);
        })

        return total;
    }

    return el;
}

export {arraySum};