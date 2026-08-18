// fonction qui affiche les livres ( createBookCard) dans la page

import { createBookCard } from "./createBookCard";

// ALGORITHME renderBooks
//
// DEBUT
//    CREER une variable booksList qui contient l'élément avec l'id books-list
// //    POUR CHAQUE livre dans la liste de livres FAIRE
// //        CREER une carte de livre avec la fonction createBookCard
// //        AJOUTER la carte de livre a booksList
// //    FIN POUR CHAQUE
// FIN
//
//

export function renderBooks(books, container) {

  const bookCards = books.map((book) => createBookCard(book));
  container.append(...bookCards);

}
