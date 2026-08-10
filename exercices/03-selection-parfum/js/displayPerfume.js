//Fonction qui affiche le parfum selectionne

import { perfumes } from "./data";

export function displayPerfume(perfume) {

    //lorsque l'element est trouve, afficher le parfum correspondant perfume-details avec les details du parfum
    const perfumeDetails = document.querySelector('.perfume-details');
    perfumeDetails.innerHTML = `
      <h2>${perfume.name}</h2>
      <p>${perfume.description}</p>
       <p>${perfume.family}</p>
    <p>${perfume.price}</p>
    `;

}



export function listenButtons() {
// Selectionner les boutons par leur data-id
const buttons = document.querySelectorAll('[data-id]');

//  Ecouter les clics sur les boutons
buttons.forEach(button => {
  button.addEventListener('click', () => {

    // chercher le bon objet dans le tableau perfumes de data.js
    const perfumeId = Number(button.dataset.id)
    const elementTrouve = perfumes.find(p => p.id === perfumeId);
    if (elementTrouve) {
      displayPerfume(elementTrouve);
    }
  });
})

}
