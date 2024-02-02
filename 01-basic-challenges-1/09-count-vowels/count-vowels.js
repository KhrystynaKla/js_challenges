function countVowels(string) {
    let count =0;
    wovels ='eoiau';
    changedString = string.toLowerCase();
    for (let i = 0; i < changedString.length; i++) {
        if(wovels.includes(changedString[i])){
            // console.log(changedString[i])
            count+=1;
        }

    }
    // console.log(count);
    return count;
}

module.exports = countVowels;
