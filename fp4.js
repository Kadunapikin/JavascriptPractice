//Creating and Array

const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars

//Using the JavaScript Keyword new
const rides = new Array ("Saab", "Volvo", "BMW");
document.getElementById("demo2").innerHTML =rides

//Accessing Array Elements
document.getElementById("demo3").innerHTML = cars[0]
document.getElementById("demo4").innerHTML =rides[2]

//Changing an Array Element
const students = ["Isaac", "Bobai", "Akutsan", "David"];
document.getElementById("demo5").innerHTML = students
students [3] = "Bakyung";
document.getElementById("demo6").innerHTML = students

// Arrays as objects
const person = {firstname:"John", lastname:"Doe", age:46};
document.getElementById("demo7").innerHTML = person.firstname 

// Array Properties and Methods
// The length Property
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo8").innerHTML = fruits.length

//Accessing the Last Array Element
let fruit = fruits[fruits.length - 1];
document.getElementById("demo9").innerHTML = fruit

//Looping Array Elements
let text = "<ul>"
for (let i = 0; i < fruits.length; i++) {
    text += "<li>" + fruits[i] + "</li>";
} 
text += "</ul>";
document.getElementById("demo10").innerHTML = text

//Adding Array Elements
fruits.push("Lemon");
document.getElementById("demo11").innerHTML = fruits
//Adding Array Elements using the length property
let pruits = ["Banana", "Orange", "Mango"];
pruits[pruits.length] = "Lemon";
document.getElementById("demo12").innerHTML = pruits

//How to Recognize an Array
//A type of property returns an object
let type = typeof(fruits);
document.getElementById("demo13").innerHTML = type
//A new ECNAScript 5 new method Array.isArray(): solves this
Array.isArray(fruits);
document.getElementById("demo14").innerHTML = Array.isArray(fruits);

//Converting Arrays to Strings
document.getElementById("demo15").innerHTML = fruits.toString();
//Joining Array elements
document.getElementById("demo16").innerHTML = fruits.join(" * ");

//Popping 
document.getElementById("demo17").innerHTML = fruits
document.getElementById("demo18").innerHTML = fruits.pop();

//Shifting Elements
document.getElementById("demo19").innerHTML = fruits
document.getElementById("demo20").innerHTML = fruits.shift();

//JavaScript Array unshift()
document.getElementById("demo21").innerHTML = fruits
fruits.unshift("Lemon");
document.getElementById("demo22").innerHTML = fruits

//JavaScript Array delete()
document.getElementById("demo23").innerHTML = fruits
delete fruits[1];
document.getElementById("demo24").innerHTML = fruits

//Merging (Concatenating) Arrays
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
document.getElementById("demo25").innerHTML = myChildren

//Merging three Arrays
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChuldren = arr1.concat(arr2, arr3); 
document.getElementById("demo26").innerHTML = myChuldren

//JavaScript Array splice()
document.getElementById("demo27").innerHTML = fruits
fruits.splice(2, 0, "Guava", "Cashew");
document.getElementById("demo28").innerHTML = fruits

//JavaScript Array splice()
document.getElementById("demo29").innerHTML = fruits
fruits.splice(0, 1);
document.getElementById("demo30").innerHTML = fruits

//JavaScript Array slice()
const foods = ["maize", "rice", "beans", "yam", "soya"];
document.getElementById("demo31").innerHTML = foods
const citrus = foods.slice(1);
document.getElementById("demo32").innerHTML = citrus 

//Slice() method with two parameters
document.getElementById("demo33").innerHTML = foods
const grape = foods.slice(1,3);
document.getElementById("demo34").innerHTML = grape 

//Automatic toString()
document.getElementById("demo35").innerHTML = foods.toString();
document.getElementById("demo36").innerHTML = foods