//  FUnction to modify the text contect of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler.";
}

const changeText2 = () => {
    const p2 = document.querySelector('.p2');
    p2.textContent = "I changed because of an event handler property.";
}

// const alertText = () => {
//     alert('Will I alert?')
// }

// Add event handler as a property of the button element
const button = document.querySelector('.btn');
button.onclick = changeText2;
// button.onclick = alertText; //The last onclick overrides the ones before.

// Event listeners
// FUnction to modify the text content of the paragraph
const changeText3 = () => {
    const p3 = document.querySelector('#para');

    p3.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button2 = document.querySelector('#btn');
button2.addEventListener('click', changeText3);






