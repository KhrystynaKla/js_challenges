function findMaxNumber(array) {
    let result = array[0];
    for (let ind in array){
        if (array[ind] > result){
            result = array[ind];
            console.log(result);
        }
    }
    return result;
}

module.exports = findMaxNumber;
