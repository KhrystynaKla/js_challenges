function findMissingLetter(arrayOfLetters) {
    let englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let stringOfEnglishLetters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
    let strtingIndex =stringOfEnglishLetters.indexOf(arrayOfLetters[0])
    for (let i=0; i<arrayOfLetters.length; i++) {
        if (arrayOfLetters[i]!==stringOfEnglishLetters[strtingIndex+i]){
            return stringOfEnglishLetters[strtingIndex+i];
        }
    }
}

module.exports = findMissingLetter;
