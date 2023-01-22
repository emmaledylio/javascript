
//selectionner un elements et faire une animation en boucle
const photo = document.querySelector(".photo");
let i = 0;

setInterval(() => {
    photo.style.transform =`translateX(${i}px)`;
    i++
    if (i>=window.innerWidth) {
        i = -200;
        
    }
});

//ajouter un classe à un element.
const titre = document.querySelector("#elements");
titre.classList.add("titre");

//modifier le style css d'un element.
const add = document.querySelector(".titre");
add.style.color = "orange";

//supprimer le contenue d'un element.
const supp = document.querySelector('#supp');
supp.innerHTML = '';
    

//reagir à un elements.
const app = document.querySelector("button");
app.addEventListener("click", () => {
   ok.classList.add("red");
});

//selectionner des elements et faire une animation
const animation = document.querySelectorAll('#elements');
for (const i = 0; i < animation.length;
    i++) {
        animation[i].style.animation = 'wobble 2S';
   }

   

    
