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

