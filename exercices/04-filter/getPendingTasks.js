//Fonction pour recuperer les taches non completees sans utiliser de boucles for, for...of ou forEach.
// 1 Creer un nouveau tableau vide
// 2 - parcourir le tableau des taches
// 3 - Pour chaque tache, si elle n'est pas completee, l'ajouter au tableau vide
//
// PSEUDOCODE
// Creer fonction getPendingTasks
// DEBUT
// Retourner les taches non completees
//
//

export function getPendingTasks(tasks) {
  return tasks.filter(task => !task.completed);
}
