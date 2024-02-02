function areAllCharactersUnique(string) {
    let dict ={};
    for (let i=0; i<string.length; i++){
        if (dict[string[i]]) return false;
        else dict[string[i]] = true;
    }
    return true;
}

module.exports = areAllCharactersUnique;
