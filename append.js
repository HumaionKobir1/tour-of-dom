// 1. where to add
const placesList = document.getElementById('places-list');
// 2.what to be added
const li = document.createElement('li');
li.innerText = 'Pahar tolibon';

// add the child
placesList.appendChild(li);

// where to ad
const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
mainContainer.appendChild(section);

const h1 = document.createElement('h1');
h1.innerText = 'My friend list';
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

// const li = document.createElement('li');
// li.innerText = 'Tanvir';
// ul.appendChild(li);

const li1 = document.createElement('li');
li1.innerText = 'Prince';
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'Limon';
ul.appendChild(li2);


const li3 = document.createElement('li');
li3.innerText = 'Jubaer';
ul.appendChild(li3);



// set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My dress secction</h1>
<ul>
    <li>T-shirt</li>
    <li>T-shirt</li>
    <li>T-shirt</li>
</ul>
`
mainContainer.appendChild(sectionDress);
