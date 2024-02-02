function isPalindrome(string) {
    if (string.length==0 || string.length==1){
        return true
    }
    simpleString = string.toLowerCase().replace(/[^a-z0-9]/g,'');
    if (simpleString[0]===simpleString[simpleString.length -1]){
        return isPalindrome(simpleString.slice(1,simpleString.length-1));
    }
    return false;
}

module.exports = isPalindrome;
