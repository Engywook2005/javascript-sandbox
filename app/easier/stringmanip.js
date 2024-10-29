function wordReversal(sentence) {
    let outputStringSet = []

    const stringSet = sentence.split(' ');

    stringSet.forEach((string) => {
        outputStringSet.push(string.split('').reverse().join(''));
    })

    return outputStringSet.join(' ');
}