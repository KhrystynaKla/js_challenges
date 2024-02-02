function formatPhoneNumber(array) {
    let result ='('
    result += array.slice(0,3).join('');
    result +=') ' + array.slice(3,6).join('');
    result += '-' + array.slice(-4).join('');
    return result;

}

module.exports = formatPhoneNumber;
