// function checkPalindrome(str) {
//     let newString=str.split('').reverse().join('')
//     if (newString===str) {
//         console.log("it is palindrome")
//     }else(
//         console.log("it is not a palindrome")
//     )


// }
// checkPalindrome(str)

function checkLongest(arraOfstrings) {
    let index = 0;
    // iLength = arraOfstrings.length();
    for (let i = 1; i < arraOfstrings.length(); i++){
        if (arraOfstrings[i].length() > arraOfstrings.length){
            index =1; arraOfstrings.length = arraOfstrings[i].length();
        }
    }
    return arraOfstrings[index];

}

console.log(checkLongest("juno","moraaa"));