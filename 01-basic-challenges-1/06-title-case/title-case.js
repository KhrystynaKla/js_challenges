function titleCase(string) {
    result=[]
    let lowerString = string.toLowerCase().split(' ');
    lowerString.forEach(element => {
        const newElem = element[0].toUpperCase() +element.substr(1);
        result.push(newElem);
    })
    console.log(result);
    return result.join(' ');
}

module.exports = titleCase;
