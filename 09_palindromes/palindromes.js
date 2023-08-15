const palindromes = function (string) {
    let stringArr = Array.from(string.toLowerCase());

    let noSpace = stringArr.filter(item => {return item !== ' ' && item !== '.' && item !== ',' && item !== '!'})

    let newArr = noSpace.reverse();

    let ogString = stringArr.filter(item => {return item !== ' ' && item !== '.' && item !== ',' && item !== '!'})

    for(let i = 0; i < newArr.length; i++) {
      if(newArr[i] !== ogString[i]){
        return false
      }
    }
    
    return true
};

// Do not edit below this line
module.exports = palindromes;
