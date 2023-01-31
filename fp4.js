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
