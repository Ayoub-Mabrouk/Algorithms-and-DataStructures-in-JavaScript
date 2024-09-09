function naiveStringSearch(text, searchingFor) {
    let counter = 0;
    const textLen = text.length;
    const wordLen = searchingFor.length;

    for (let i = 0; i <= textLen - wordLen; i++) {
        for (let j = 0; j < wordLen; j++) {
            if (searchingFor[j] !== text[i + j]) break;
            if (j + 1 === wordLen) counter++;
        }
    }

    return counter;
}
