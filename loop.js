//The for...of loop
const cats = ['Leopard', 'Jaguar', 'Tiger', 'Lion'];

for (const cat of cats) {
    console.log(cat);
}

//map() and filter()
function toUpper(string) {
    return string.toUpperCase();
}
const upperCats = cats.map(toUpper);
console.log(upperCats);

//Using a filter()
function Lcats(cats) {
    return cats.startsWith('L');
}
const filtered = cats.filter(Lcats);
console.log(filtered);
