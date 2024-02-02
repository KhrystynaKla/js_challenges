function calculator(a,b,c) {
    // if (typeof(a)!='number' || typeof(b)!='number' || typeof(c)!='string'){
    //     return Error('invalid type');
    // } else if (c=='+'){
    //     return a+b;
    // } else if (c=='-'){
    //     return a-b;
    // } else if(c=='*'){
    //     return a*b;
    // } else if (c=='/' && b!=0){
    //     return a/b;
    // }

    let result;
    switch(c){
        case'+':
            result = a+b;
            break;
        case '-':
            result = a-b;
            break;
        case '*':
            result = a*b;
            break;
        case '/':
            result = a/b;
            break;
        default:
            throw new Error('invalid type')
        
    }
    return result;
}

module.exports = calculator;
