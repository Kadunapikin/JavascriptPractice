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

//Implement a function that takes an array and some other arguments then removes the other arguments from that array:
const removeFromArray = function(...items) {
    const array = items[0];
    const newArray =[];
    array.forEach((item) => {
        if (!items.includes(item)) {
            newArray.push(item)
        }
    });
    return newArray;
    };

    //Implement a function that takes 2 integers and returns the sum of every number between(and including) them
    const sumAll = function(a, b) {
        if (a > b) {
            [a, b] = [b, a];
        }
        if (a < 0 || b < 0) {
            return 'ERROR';
        }
        if (typeof a != 'number' || typeof b != 'number') {
            return 'ERROR';
        }
        let sum = 0;
        for (let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
        };
        
    
    