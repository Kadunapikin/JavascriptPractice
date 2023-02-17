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