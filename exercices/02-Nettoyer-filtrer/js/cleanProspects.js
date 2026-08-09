// fonction pour nettoyer le tableau prospects.js
//1 - retourne un nouveau tableau contenant uniquement les prospects valides.
//2 - les espaces inutiles au début et à la fin.
//3 - transformer la ville en minuscules
//4 - transforme l’adresse en minuscules

// fonction cleanProspects()
// prospects.filter(active === true)
//



// export function cleanProspects() {
// //filter retourne un nouveau tableau
//   const filteredArray = prospects.filter(obj => obj.active === true);
// // nettoyer le nouveau tableau
//   const cleanedArray = filteredArray.map(obj => {
//     return {
//       id: obj.id,
//       name: obj.name.trim(),
//       city: obj.city.trim().toLowerCase(),
//       email: obj.email.trim().toLowerCase(),
//       active: obj.active
//     };

//   })

//   return cleanedArray;
// }

export function cleanProspects(prospects) {
  //filter et nettoyer sans utiliser filter() map().reduce()
  // 1 - creer un nouveau tableau vide
  const cleanedArray = []
  // 2 - parcourir le tableau
  for (let i = 0; i < prospects.length; i++){
    // filter les prospects actifs
    if (prospects[i].active === true && prospects[i].email.trim() !='') {
      //nettoyer les prospects actifs
      const cleanedProspects = {
        id: prospects[i].id,
        name: prospects[i].name.trim(),
        city: prospects[i].city.trim().toLowerCase(),
        email: prospects[i].email.trim().toLowerCase(),
        active: prospects[i].active
      }

      //ajouter la liste des prospects actifs et nettoyes au tableau
      cleanedArray.push(cleanedProspects);
    }
  }
  return cleanedArray;
}
