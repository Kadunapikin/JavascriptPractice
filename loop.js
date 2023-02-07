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

//Rewritting for...of using for loop
for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);   
}
/*
//Exiting loops with break
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
const searchName = input.value.toLowerCase();
input.value = '';
input.focus();
para.textContent = '';
for (const contact of contacts) {
    const splitContact = contact.split(':');
    if (splitContact[0].toLowerCase() === searchName) {
        para.textContent =`${splitContact[0]}'s number is ${splitContact[1]}.`;
        break;
    }
}
if (para.textContent === '') {
    para.textContent = 'Contact not found';
}
});
*/

//Skipping iterations with continue
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    para.textContent = 'Output: ';
    const num = input.value;
    input.value = '';
    input.focus();
    /*
    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqRoot(1);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
            */
            for (let i = 1; i <= num; i++) {
                let sqRoot = Math.sqrt(i);
                if (Math.floor(sqRoot) !== sqRoot) {
                  continue;
        }
        para.textContent += `${i} `;
    }
});