/* --- QUERY SELECTORS --- */
let h1Tag = document.querySelector('h1');
let aTags = document.querySelectorAll('a');
let contactSection = document.querySelector('#contact');
let aboutSection = document.querySelector('#about');
let main = document.querySelector('#main');
let contactP = document.querySelector('p');
let tableTag = document.querySelector('table');
let tdTags = document.querySelectorAll('thead td');
let trTag = document.querySelector('thead tr');

/* --- Fixing head title --- */
document.title = 'Fruits & Vegetables Corp';

/* --- Adding main.css too <HEAD> --- */
let head = document.head;
let cssFile = document.createElement('link');
head.appendChild(cssFile);
cssFile.setAttribute('rel', 'stylesheet');
cssFile.setAttribute('type', 'text/css');
cssFile.setAttribute('href', 'main.css')

/* --- Fixing h1 text content --- */
h1Tag.textContent = 'Fruits & Vegetables Corp'

/* --- Fixing a text content --- */
for(let x of aTags){
  if(x.textContent === 'Bananas'){
    x.textContent = 'Vegetables'
  }
}

/* --- Fixing section order  --- */
main.removeChild(aboutSection);
main.removeChild(contactSection);
main.appendChild(aboutSection);
main.appendChild(contactSection);


/* --- Fixing about section --- */
aboutSection.textContent = '';
aboutH2 = document.createElement('h2');
aboutH2.textContent = 'About';
aboutP = document.createElement('p');
aboutP.textContent = "We're the best in fruits & vegetables";
aboutSection.appendChild(aboutH2);
aboutSection.appendChild(aboutP);

/* --- Fixing th tags in table --- */
thName = document.createElement('th');
thName.textContent = 'Name';
thEmail = document.createElement('th');
thEmail.textContent = 'Email';
trTag.replaceChild(thName, tdTags[0]);
trTag.replaceChild(thEmail, tdTags[1]);

/* --- Fixing contact content order --- */
contactH2 = document.createElement('h2');
contactH2.textContent = 'Contact';
contactSection.removeChild(contactP);
contactSection.removeChild(tableTag);
contactSection.appendChild(contactH2);
contactSection.appendChild(contactP);
contactSection.appendChild(tableTag);
