// function removeDuplicates(array) {
//     const result = [];

//     for (let word of array) {
//         if (!result.includes(word)) {  // Correct the condition and use 'includes'
//             result.push(word);
//         }
//     }

//     return result;
// }

function removeDuplicates(string){
    return Array.from(new Set(string));
}

module.exports = removeDuplicates;
