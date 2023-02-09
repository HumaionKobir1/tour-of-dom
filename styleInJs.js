const sections = document.querySelectorAll('section');
// console.log(sections);
for (const section of sections){
    section.style.border = "2px solid steelblue";
    section.style.marginBottom = '5px';
    section.style.borderRadius = '20px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightgray';
}

const nameContainer = document.getElementById('name-container');
// nameContainer.style.backgroundColor = 'gray';
nameContainer.classList.add('purple-bg');
nameContainer.classList.add('text-center');
nameContainer.classList.remove('large-text');