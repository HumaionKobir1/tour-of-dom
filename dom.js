console.log('Hello from java script dom');

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1.innerText);
}

const fritsTitle = document.getElementById('fruits-title');
fritsTitle.innerText = 'Frits changed by JS';

const allImportantPlaces = document.getElementsByClassName('important-places');
for(const places of allImportantPlaces){
    console.log(places.innerText);
}