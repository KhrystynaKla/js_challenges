function findMissingNumber(array) {
    if (array.length === 0) return 1;
    let sumUniqueNumbers = (array[0] +array[array.length - 1])/2*(array.length+1);
    let sumNumbers=0
    for (let i = 0; i < array.length; i++) {
        sumNumbers+=array[i];
    }
    return sumUniqueNumbers-sumNumbers;
}

module.exports = findMissingNumber;
