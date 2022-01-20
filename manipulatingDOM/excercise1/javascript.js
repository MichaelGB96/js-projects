const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.style.color = "red";
para.textContent = "Hey I'm red!"

container.appendChild(para);

const titleH3 = document.createElement('h3');
titleH3.style.color = "blue";
titleH3.textContent = "I'm a blue h3!"

container.appendChild(titleH3);

const subcontainer = document.createElement('div');
subcontainer.classList.add('subcontainer');
subcontainer.setAttribute('style', 'border: 1px solid black; background-color: pink');

const titleH1 = document.createElement('h1');
titleH1.textContent = "I'm in a div";
subcontainer.appendChild(titleH1);

const para2 = document.createElement('p');
para2.textContent = "ME TOO!";
subcontainer.appendChild(para2);

container.appendChild(subcontainer);