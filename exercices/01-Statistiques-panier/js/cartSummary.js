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


export function cartSummary(products) {

    let totalQuantity = 0;
    let totalPrice = 0;
    let remainingQuantity = 0;
    let remainingPrice = 0;
    let productCount = 0;
  for (let product of products) {


    // totalQuantity
    totalQuantity += product.quantity;
    //totalPrice
    totalPrice += product.price * product.quantity;
    //remainingQuantity
    if (product.purchased === false) {
      remainingQuantity += product.quantity;
    }
    //remainingPrice
    if (product.purchased === false) {
      remainingPrice += product.price * product.quantity;
    }
    //productCount
    productCount = products.length;

  }
    return `totalQuantity: ${totalQuantity}, totalPrice: ${totalPrice}, remainingQuantity: ${remainingQuantity}, remainingPrice: ${remainingPrice}, productCount: ${productCount}`;
}
