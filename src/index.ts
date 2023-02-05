import "./assets/styles/styles.scss";
import {home} from './assets/javascript/home';
import {cv} from "./assets/javascript/cv";
import {porfolio} from "./assets/javascript/porfolio";

const navTogglerElement: HTMLElement = document.querySelector('.navToggler');
const nav = {
    home: <HTMLElement>document.querySelector('.home'),
    cv: <HTMLElement>document.querySelector('.cv'),
    porfolio: <HTMLElement>document.querySelector('.porfolio'),
}
const UlElement: HTMLDListElement = document.querySelector('.nav-container>ul');
const contentElement: HTMLElement = document.querySelector(".content");

//Affiche un contenu (import) différent en fonction du param
const showContent = (target:string):void=>{
    target === '' ? target = '#home' : undefined;
    
    switch (target) {
    case '#home' : 
        contentElement.innerHTML = home.content;
        contentElement.setAttribute('class', 'content home');
        document.querySelectorAll('.nav-container>ul>.active').forEach((e)=> e.classList.remove('active'));
        nav.home.classList.add('active');
        UlElement.classList.remove('show')
        document.querySelector('.navToggler>span').innerHTML = `Home`;
        break;

    case '#cv': 
        contentElement.innerHTML = cv.content;
        contentElement.setAttribute('class', 'content cv');
        document.querySelectorAll('.nav-container>ul>.active').forEach((e)=> e.classList.remove('active'));
        nav.cv.classList.add('active');
        UlElement.classList.remove('show')
        document.querySelector('.navToggler>span').innerHTML = `Curriculum Vitae`;
        break;

    case '#porfolio':
        contentElement.innerHTML = porfolio.content;
        contentElement.setAttribute('class', 'content porfolio');
        document.querySelectorAll('.nav-container>ul>.active').forEach((e)=> e.classList.remove('active'));
        nav.porfolio.classList.add('active');
        UlElement.classList.remove('show')
        document.querySelector('.navToggler>span').innerHTML = `Porfolio`;
        break;
    }
}

//NavToggler Event
//Change ajoute la class 'show' au menu pour afficher la liste en responsive
navTogglerElement.addEventListener('click', function(){
    if (UlElement.classList.contains('show')) {
        UlElement.classList.remove('show');
        this.classList.contains('down') 
            ? this.classList.replace('down', 'up')
            : this.classList.add('up');
    } else {
        UlElement.classList.add('show');
        this.classList.contains('up') 
            ? this.classList.replace('up', 'down')
            : this.classList.add('down');
    }
})

//Créer un tableau itérable à partir de nav
//Ajoute un eventlisener à chaque element (e) pour actualiser le contenu (content)
Object.entries(nav).forEach((e)=>{
    e[1].addEventListener('click', ()=> {
        showContent('#'+e[0]);
        navTogglerElement.classList.contains('down') 
            ? navTogglerElement.classList.replace('down', 'up')
            : navTogglerElement.classList.add('up');
    })
});

//window event
//re cache la navbar quand on est plus en responsive
window.addEventListener('resize', () => {
    if(window.innerWidth >= 768) {
        navTogglerElement.classList.remove('down');
        UlElement.classList.remove('show');
    }
})

//Affiche le contenu en fonction du hash présent dans l'url
showContent(document.location.hash);