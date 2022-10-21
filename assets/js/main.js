const images = [
    {
        image: './assets/img/03.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: './assets/img/04.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: './assets/img/05.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: './assets/img/03.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: './assets/img/03.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images)

//seleziono DOM e dove posizionare le img



const slidesEl = document.querySelector('.slides');

let activeImg= 0;
//creo loop img dell'array 



for (let i = 0; i < images.length; i++){
    const slideUrl = images[i];
    
    const slideMark = `<img class="${i === activeImg ? 'active' : ''}" src="${slideUrl.image}" alt="">`
    slidesEl.insertAdjacentHTML('beforeend', slideMark)
}


//Milestone 2:
/*Aggiungere il ciclo infinito del carosello. 
Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e 
viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.*/


 // constanti per i pulsanti

 const prevButton = document.querySelector('.prev')
 const nextButton = document.querySelector('.next')
 //input al click
 
 nextButton.addEventListener('click', function (){
   console.log('next');
 
 
   const slides =document.querySelectorAll('.slides > img');
   const thisSlides = slides[activeImg];
   
   // rimuovo class active 
   thisSlides.classList.remove('active')
 
   //incremento immagini 
   activeImg++
 
   //vado alla seconda img
 
   const newImg = slides[activeImg]
 
   // do di nuovo la classe active
 
   newImg.classList.add('active')
 })
 
 prevButton.addEventListener('click', function (){
     console.log('prev');
   
   
     const slides =document.querySelectorAll('.slides > img');
     
     const thisSlides = slides[activeImg];
     
     // rimuovo class active 
     thisSlides.classList.remove('active')
   
     //incremento immagini 
     activeImg--
   
     //vado alla seconda img
   
     const newImg = slides[activeImg]
   
     // do di nuovo la classe active
   
     newImg.classList.add('active')
   })

   //function
function next(){
   slidesEl[visibile].classList.remove('.active')
    if(visibile == images.length - 1){
        visibile = 0;
    } else{
        visibile++;
    }
    hidden[visibile].classList.add('.active')
}

function prev(){

    slidesEl[visibile].classList.remove('.active')
    if(visibile == 0){
        visibile = images.length - 1;
    } else{
        visibile--;
    }
    hidden[visibile].classList.add('.active')
}