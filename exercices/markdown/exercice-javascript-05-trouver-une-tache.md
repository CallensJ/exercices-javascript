# Exercice JavaScript 05 — Trouver une tâche par son identifiant

## Objectif

Apprendre à utiliser `find()` pour récupérer **un seul objet** dans un tableau.

Dans l'exercice précédent, `filter()` créait une liste de plusieurs tâches. Ici, on cherche une tâche précise à partir de son `id`.

## Fichiers à créer

```text
exercice-05/
├── data.js
├── findTaskById.js
└── main.js
```

## `data.js`

Copie ces données :

```js
export const tasks = [
  { id: 1, title: "Répondre aux prospects", completed: false },
  { id: 2, title: "Mettre à jour le portfolio", completed: true },
  { id: 3, title: "Préparer les visuels Instagram", completed: false },
  { id: 4, title: "Lire le chapitre Python", completed: false },
];
```

## Travail demandé

Dans `findTaskById.js`, écris et exporte une fonction :

```js
findTaskById(tasks, id)
```

Elle doit retourner la tâche dont l'identifiant correspond à `id`.

Contraintes :

- utilise obligatoirement `find()` ;
- n'utilise ni boucle `for`, ni `for...of`, ni `forEach` ;
- ne modifie jamais le tableau `tasks` ;
- si l'identifiant n'existe pas, la fonction doit naturellement retourner `undefined`.

Dans `main.js` :

1. Importe les données et ta fonction.
2. Recherche la tâche avec l'identifiant `3`.
3. Affiche le résultat avec `console.log()`.
4. Recherche ensuite l'identifiant `99` et affiche aussi le résultat.

## Résultat attendu

Pour l'identifiant `3`, la console doit afficher :

```js
{ id: 3, title: "Préparer les visuels Instagram", completed: false }
```

Pour l'identifiant `99`, elle doit afficher :

```js
undefined
```

## Avant de coder

Écris ce pseudo-code dans un commentaire au début de `findTaskById.js` :

```text
Créer la fonction findTaskById qui reçoit une liste de tâches et un identifiant.
Parcourir la liste avec find().
Retourner la première tâche dont l'id correspond à l'identifiant recherché.
Si aucune tâche ne correspond, retourner undefined.
```

## À comprendre avant d'envoyer ton code

`find()` s'arrête dès qu'il a trouvé le premier élément correspondant. Il est adapté à une recherche unique, contrairement à `filter()` qui retourne toujours un tableau.
