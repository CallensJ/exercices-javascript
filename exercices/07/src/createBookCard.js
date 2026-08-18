// fonction qui cree une carte de livre

// Chaque carte doit contenir :

// - un titre `h3` avec le nom du livre ;
// - un paragraphe avec l'auteur ;
// - un élément `time` avec l'année ;
// - un paragraphe indiquant `Disponible` ou `Indisponible` ;
// - un attribut `data-book-id` sur l'article contenant l'identifiant du livre ;
// - une classe `book-card` sur l'article ;
// - une classe `is-available` ou `is-unavailable` selon l'état du livre.

// ALGORITHME createBookCard
//
// DEBUT
//    CREER un élément article
//     AJOUTER une classe book-card a l'article
//     AJOUTER un attribut data-book-id a l'article avec l'identifiant du livre
//     CREER un élément h3
//     AJOUTER le titre du livre a l'élément h3
//     AJOUTER l'élément h3 a l'article
//     CREER un élément p pour l'auteur
//     AJOUTER le nom de l'auteur a l'élément p
//     AJOUTER l'élément p a l'article
//     CREER un élément time pour l'année
//     AJOUTER l'année du livre a l'élément time
//     AJOUTER l'élément time a l'article
//     CREER un élément p pour la disponibilité
//     SI le livre est disponible ALORS
//         AJOUTER le texte "Disponible" a l'élément p
//         AJOUTER la classe is-available a l'article
//     SINON
//         AJOUTER le texte "Indisponible" a l'élément p
//         AJOUTER la classe is-unavailable a l'article
//     FIN SI
//     AJOUTER l'élément p a l'article
//     RETOURNER l'article
// FIN
//
//

export function createBookCard(book) {
  const article = document.createElement("article");
  article.classList.add("book-card");
  article.setAttribute("data-book-id", book.id);

  const h3 = document.createElement("h3");
  h3.textContent = book.title;
  article.appendChild(h3);

  const pAuthor = document.createElement("p");
  pAuthor.textContent = book.author;
  article.appendChild(pAuthor)

  const time = document.createElement("time");
  time.textContent = book.year;
  article.appendChild(time);

  const pAvailability = document.createElement("p");
  if (book.available === true) {
    pAvailability.textContent = "Disponible";
    article.classList.add("is-available");
    article.appendChild(pAvailability);
  } else {
    pAvailability.textContent = "Indisponible";
    article.classList.add("is-unavailable");
    article.appendChild(pAvailability);
  }

  return article;


}
