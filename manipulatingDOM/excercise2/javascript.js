// method 2
const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

// method 3
const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});

// Using named functions
function alertFunction() {
    alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector('#btn3');
/* method 2
btn3.onclick = alertFunction;
*/
// method 3
btn3.addEventListener('click', alertFunction);