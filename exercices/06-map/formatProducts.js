//fonction qui retourne un nouveau tableau formate




// algorithme formatProducts
// DEBUT
//  fonction formatProducts()
//    //  DECLARER un tableau vide formatedProducts
//    // DECLARER id
//    // DECLARER NOUVEAU objet label
//    // DECLARER NOUVEAU IsAvailable
//
//
//   //  Parcourir le tableau products
//  //  POUR CHAQUE produit DANS products FAIRE
//`label` contient le nom en majuscules, un tiret long, puis le prix avec exactement deux décimales et le symbole euro ;
//`available` vaut `true` lorsque le stock est supérieur à zéro, sinon `false` ;
// le tableau `products` et ses objets ne doivent pas être modifiés.


export function formatProduct(products) {
  const formatedProducts = products.map((product) => {

    const { id, name, price, stock } = product;
    const label = `${name.toUpperCase()} — ${price.toFixed(2)}€`;
    const available = stock > 0;
    return { id, label, available };
  })
  // console.log(formatedProducts);
  return formatedProducts;
}



//correction
//
// ALGORITHME formatProducts

// DEBUT

//     CREER un nouveau tableau à partir de products

//     POUR CHAQUE produit
//         RECUPERER son id

//         CREER un label avec :
//             le nom en majuscules
//             le prix avec deux décimales
//             le symbole euro

//         SI le stock est supérieur à zéro
//             la disponibilité vaut vrai
//         SINON
//             la disponibilité vaut faux
//         FIN SI

//         AJOUTER au nouveau tableau un objet contenant :
//             id
//             label
//             disponibilité
//     FIN POUR

//     RETOURNER le nouveau tableau

// FIN
