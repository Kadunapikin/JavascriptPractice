//helloWorld function that returns the phrase `Hello, World!`
const helloWorld = function() {
    return 'Hello, World!'
  };

//Write a function that simply repeats the string a given number of times:
  const repeatString = function (text, times) {
    if (times < 0) {
        return 'ERROR';
    }
    let string = '';
    for (let i = 0; i < times; i++) {
        string += text;
     }
     return string;
}

//write a function called `reverseString` that returns its input, reversed!
const reverseString = function (string) {
    return string.split('').reverse().join('');
    };

//using loop
function reverseString(str) {
    const newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
    