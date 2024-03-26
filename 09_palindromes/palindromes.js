const palindromes = function (s) {
    const abc = 'abcdefghijklmnopqrstuvwxyz0123456789'

    const newS = s.toLowerCase().split('').filter((letter) => abc.includes(letter)).join('')
    const reversedS = newS.split('').reverse().join('')

    return newS === reversedS

};

// Do not edit below this line
module.exports = palindromes;
