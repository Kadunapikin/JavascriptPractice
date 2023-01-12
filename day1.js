/*const originals = [5, 2, 3];

const doubled = originals.map((item) => item * 2);

console.log(doubled);


let textBox = document.querySelector ("#textBox");
let output = document.querySelector ("#output");


textBox.addEventListener('keydown', (event) => output.textContent = `you pressed "${event.key}".`);
*/

const select = document.querySelector ('select');
const para = document.querySelector ('p');
select.addEventListener ('change', setweather);

function setweather() {
    const choice = select.value;

    if (choice === 'sunny') {
        para.textContent = 'its sunny outside, wear a hat';
    } else if (choice === 'rainy') {
        para.textContent = 'its raining outside, get an umbrella';
    } else if (choice === 'snowing') {
        para.textContent = 'its really snowing outsing, go back inside';
    } else if (choice === 'overcast') {
        para.textContent = 'it is\'nt raining yet but the sky is really grey and it may rain any moment';
    } else {
        para.textContent = '';
    }
}

