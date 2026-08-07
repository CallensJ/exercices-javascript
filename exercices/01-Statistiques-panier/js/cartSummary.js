// fonction cardSummary
// analyse le tableau de produit et retourne un objet résumé

//PSEUDOCODE

//fonction cardSummary(products)
//POUR chaque produit dans produits
// Retourne le nombre total de type produits productCount()
    //product.length
// Retourne le nombre total de produits dans le panier : totalQuantity()
    //
// Retourne la quantite totale des produits non achete :remainingQuantity()
// le prix total de tous les produits: totalPrice()
// Le prix total des produits non achetes: RemainingPrice()
import products from "./data/data.js";

function productCount() {


  return `productCount: ${products.length}`;
}

function totalQuantity() {
//calculer le nombre total de produit dans le panier
// 1 - initialiser une variable a 0
  let total = 0;
  //2 - parcourir la liste des produits
  for (let product of products) {
    //3 - ajouter la quantite du produit au total
    total += product.quantity;
  }
  //3 - retourner la valeur
  return `totalQuantity: ${total}`;

}

function remainingQuantity() {
//calculer la quantite totale des produits non achetes
  let total = 0;
  for (let product of products) {
    if (product.purchased === false) {
      total += product.quantity;
    }

  }
  return `remainingQuantity: ${total}`;
}

function totalPrice() {
// calcule le prix total de tous les produits

  let total = 0;
  for (let product of products) {
    total += product.price * product.quantity;
  }
  return `totalPrice: ${total}`;
}

function remainingPrice() {
  //calcul le prix total des produits non achetes
  let total = 0;
  for (let product of products) {
    if (product.purchased === false) {
      total += product.price * product.quantity;
    }

  }
  return `remainingPrice: ${total}`;
}


export function cartSummary() {
  return [
    productCount(),
    totalQuantity(),
    remainingQuantity(),
    totalPrice(),
    remainingPrice(),
  ];
}
