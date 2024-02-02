function countOccurrences(string, character) {
    result =0;
    for (let i=0; i<string.length; i++) {
        if (character == string[i]){
            result+=1;
        }
    }
    return result;

}

const secondSolution = (str, char) => string.split(char).length -1;

module.exports = countOccurrences;
