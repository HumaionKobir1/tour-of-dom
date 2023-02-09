// console.log('Hello from java script dom');
// Option-1
const liCollection = document.getElementsByTagName('li');
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}

// Option-2
const allHeadings = document.getElementsByTagName('h1');
for(const h1 of allHeadings){
    console.log(h1.innerText);
}


// Option-3
const fritsTitle = document.getElementById('fruits-title');
fritsTitle.innerText = 'Frits changed by JS';


// Option-4
const allImportantPlaces = document.getElementsByClassName('important-places');
for(const places of allImportantPlaces){
    console.log(places.innerText);
}


// Opiton-5
// QuerySeclector
// will return the first item


// Option-6
// querySeclectorAll
const someLi = document.querySelectorAll('.fruits-container li');
for(const li of someLi){
    console.log(li.innerText);
}