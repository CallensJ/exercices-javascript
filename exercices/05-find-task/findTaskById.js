//Fonction pour retrouver une tache par son id sans utiliser  ni boucle `for`, ni `for...of`, ni `forEach` ;
// 1 -Creer une fonction findTaskById
//
//
// 4 - Si la tache est trouvee l'assigner a taskFound
//
//
// PSEUDOCODE:
// DÉBUT
//     POUR CHAQUE tâche de tasks
//         SI tâche.id est égal à id ALORS
//             RETOURNER tâche
//         FIN SI
//     FIN POUR

//     RETOURNER undefined
// FIN




export function findTaskById(tasks, id) {
  const foundTask = tasks.find(task => task.id === id);
  return foundTask;

}
