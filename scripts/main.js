
let boutonUn = document.querySelector('.button1');
let boutonDeux = document.querySelector('.button2');
let boutonTrois = document.querySelector('.button3');
let button = document.querySelector('button');
let body = document.querySelector('body');
let container = document.querySelector('.container');


container.addEventListener('click', (event)=> {
// On check si on est bien sur un bouton
if (event.target.classList.contains('button')) {
    // On vérifie si le bouton a déjà une classe active
    if (event.target.classList.contains('active')) {
        event.target.classList.remove('active') 
        // On vérifie si l'élément cliqué n'a pas déjà une classe active 
    } else {
        // Si mon container a un autre enfant que celui sur lequel je suis en train de cliquer qui possède déjà la classe active
        if (container.querySelector('.active')) {
            container.querySelector('.active').classList.remove('active') 
        }
        // Si mon wrapper n'a aucun enfant qui a la classe active alors ... 
        event.target.classList.add('active')
    }
}
})


























// container.addEventListener('click', (event)=> {
//     if (event.target.parentElement.querySelector('.active')) {event.target.parentElement.querySelector('.active').classList.remove('active')}
//     else if (event.target.classList.contains('button')) {event.target.classList.add('active')}
// })




// boutonUn.addEventListener('click', ()=> {
//     if (boutonUn.classList.contains('active') || boutonDeux.classList.contains('active') || boutonTrois.classList.contains('active') ) {boutonUn.classList.remove('active')||  boutonDeux.classList.remove('active') || boutonTrois.classList.remove('active')}
//     else {boutonUn.classList.add('active')}
// })

// boutonDeux.addEventListener('click', ()=> {
//     if (boutonUn.classList.contains('active') || boutonDeux.classList.contains('active') || boutonTrois.classList.contains('active') ) {boutonUn.classList.remove('active') || boutonDeux.classList.remove('active') || boutonTrois.classList.remove('active')}
//     else {boutonDeux.classList.add('active')}
// })

// boutonTrois.addEventListener('click', ()=> {
//     if (boutonUn.classList.contains('active') || boutonDeux.classList.contains('active') || boutonTrois.classList.contains('active') ) {boutonUn.classList.remove('active') || boutonDeux.classList.remove('active') || boutonTrois.classList.remove('active')}
//     else {boutonTrois.classList.add('active')}
// })

