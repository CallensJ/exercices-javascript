# Exercice JavaScript 04 — Filtrer les tâches à faire

Cet exercice est entièrement indépendant des précédents. Tu as seulement besoin de Node.js ou de la console de ton navigateur.

## Objectif

Apprendre à utiliser filter() pour créer un nouveau tableau contenant uniquement les éléments qui respectent une condition.

## Données de départ

Crée un fichier data.js :

~~~js
export const tasks = [
  { id: 1, title: "Répondre aux prospects", completed: false, priority: "high" },
  { id: 2, title: "Mettre à jour le portfolio", completed: true, priority: "medium" },
  { id: 3, title: "Préparer les visuels Instagram", completed: false, priority: "medium" },
  { id: 4, title: "Lire le chapitre Python", completed: false, priority: "low" },
  { id: 5, title: "Envoyer les factures", completed: true, priority: "high" },
  { id: 6, title: "Corriger le formulaire de contact", completed: false, priority: "high" },
];
~~~

Crée ensuite un fichier getPendingTasks.js et un fichier main.js.

## Mission

Dans getPendingTasks.js, écris et exporte une fonction getPendingTasks(tasks).

Elle reçoit un tableau de tâches et retourne un nouveau tableau ne contenant que les tâches dont completed vaut false.

Dans main.js :

1. importe tasks ;
2. importe getPendingTasks ;
3. appelle la fonction ;
4. affiche le résultat avec console.table ;
5. affiche aussi le tableau tasks original, afin de vérifier qu'il n'a pas été modifié.

## Résultat attendu

Le tableau retourné contient les tâches avec les identifiants 1, 3, 4 et 6.

Le tableau tasks original contient toujours les six tâches.

## Contraintes

- Tu dois utiliser filter().
- Tu ne dois pas modifier une tâche ni le tableau tasks.
- Tu ne dois pas utiliser de boucle for, for...of ou forEach.
- La fonction ne doit ni afficher dans la console ni manipuler le DOM : elle retourne uniquement son résultat.

## Avant de coder

Envoie-moi d'abord un pseudo-code de la fonction et réponds brièvement :

1. Quelle condition doit respecter une tâche pour être conservée ?
2. Pourquoi filter() est plus adapté que find() ?
3. Quelle différence attends-tu entre tasks et pendingTasks après l'appel de la fonction ?

## Bonus facultatif

Écris une seconde fonction getHighPriorityPendingTasks(tasks) qui garde uniquement les tâches à faire et de priorité high. Ne commence ce bonus qu'après avoir validé la mission principale.
