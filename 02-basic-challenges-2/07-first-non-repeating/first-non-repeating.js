function findFirstNonRepeatingCharacter(string) {
    let mapOfCharacters = new Map();
    for (let i = 0; i < string.length; i++) {
        mapOfCharacters.set(string[i], (mapOfCharacters.get(string[i]) || 0) + 1);
    }
    for (let [character, count] of mapOfCharacters) {
        if ( count ===1)return character;
    }
    return null;
}

module.exports = findFirstNonRepeatingCharacter;