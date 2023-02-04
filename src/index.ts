import "./assets/styles/styles.scss";
import {home} from './assets/javascript/home';
import {cv} from "./assets/javascript/cv";
import {porfolio} from "./assets/javascript/porfolio";
import {contact} from './assets/javascript/contact';

const contentElement: HTMLElement = document.querySelector(".content");
const nav = {
    home: <HTMLElement>document.querySelector('.home'),
    cv: <HTMLElement>document.querySelector('.cv'),
    porfolio: <HTMLElement>document.querySelector('.porfolio'),
    contact: <HTMLElement>document.querySelector('.contact'),
}

//Affiche un contenu (import) différent en fonction du param
const showContent = (target:string):void=>{
    target === '' ? target = '#home' : undefined;
    
    switch (target) {
    case '#home' : 
        contentElement.innerHTML = home.content;
        contentElement.setAttribute('class', 'content home');
        document.querySelectorAll('.active').forEach((e)=> e.classList.remove('active'));
        nav.home.classList.add('active');
        break;

    case '#cv': 
        contentElement.innerHTML = cv.content;
        contentElement.setAttribute('class', 'content cv');
        document.querySelectorAll('.active').forEach((e)=> e.classList.remove('active'));
        nav.cv.classList.add('active');
        break;

    case '#porfolio':
        contentElement.innerHTML = porfolio.content;
        contentElement.setAttribute('class', 'content porfolio');
        document.querySelectorAll('.active').forEach((e)=> e.classList.remove('active'));
        nav.porfolio.classList.add('active');
        break;
        
    case '#contact': 
        contentElement.innerHTML = contact.content;
        contentElement.setAttribute('class', 'content contact');
        document.querySelectorAll('.active').forEach((e)=> e.classList.remove('active'));
        nav.contact.classList.add('active');
        break;
    }
}

//Créer un tableau itérable à partir de nav
//Ajoute un eventlisener à chaque element (e) pour actualiser le contenu (content)
Object.entries(nav).forEach((e)=>{
    e[1].addEventListener('click', ()=> {
        showContent('#'+e[0]);
    })
});

//Affiche le contenu en fonction du hash présent dans l'url
showContent(document.location.hash);