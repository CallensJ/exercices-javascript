# Exercice JavaScript 07 — Générer des cartes dans le DOM

## Contexte

Une médiathèque possède un tableau de livres. Ton travail consiste à générer une carte HTML pour chaque livre, puis à insérer ces cartes dans la page.

L'exercice est autonome : nouveau dossier, nouvelles données, aucun parfum. Il prépare néanmoins une compétence indispensable à Maison Éclat : passer d'un tableau JavaScript à une interface visible.

## Objectifs pédagogiques

- sélectionner un conteneur dans le DOM ;
- créer des éléments avec `document.createElement()` ;
- renseigner leur contenu avec `textContent` ;
- transformer des données en éléments DOM avec `map()` ;
- insérer plusieurs éléments dans la page ;
- séparer création d'une carte et affichage d'une collection.

## Préparation

Crée un projet Vite **Vanilla JavaScript** indépendant, puis conserve cette structure minimale :

```text
exercice-07/
├── index.html
├── package.json
└── src/
    ├── data.js
    ├── createBookCard.js
    ├── renderBooks.js
    └── main.js
```

Le style n'est pas évalué. Quelques règles CSS simples sont autorisées, mais ne transforme pas un exercice DOM en pèlerinage graphique de trois heures.

## HTML de départ

Dans `index.html`, crée au minimum :

- un `main` ;
- un `h1` ;
- une section possédant un titre accessible ;
- un conteneur vide avec l'identifiant `books-list`.

Le HTML ne doit contenir aucune carte de livre écrite à la main.

## Données

Dans `src/data.js`, exporte :

```js
export const books = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    year: 1965,
    available: true,
  },
  {
    id: 2,
    title: "Neuromancien",
    author: "William Gibson",
    year: 1984,
    available: false,
  },
  {
    id: 3,
    title: "La Main gauche de la nuit",
    author: "Ursula K. Le Guin",
    year: 1969,
    available: true,
  },
  {
    id: 4,
    title: "Le Problème à trois corps",
    author: "Liu Cixin",
    year: 2008,
    available: false,
  },
];
```

## Travail demandé

### 1. Fonction `createBookCard(book)`

Dans `createBookCard.js`, crée et exporte une fonction qui reçoit un livre et retourne un élément `<article>` complet.

Chaque carte doit contenir :

- un titre `h3` avec le nom du livre ;
- un paragraphe avec l'auteur ;
- un élément `time` avec l'année ;
- un paragraphe indiquant `Disponible` ou `Indisponible` ;
- un attribut `data-book-id` sur l'article contenant l'identifiant du livre ;
- une classe `book-card` sur l'article ;
- une classe `is-available` ou `is-unavailable` selon l'état du livre.

La fonction ne doit pas insérer elle-même la carte dans la page. Elle la construit et la retourne.

### 2. Fonction `renderBooks(books, container)`

Dans `renderBooks.js`, crée et exporte une fonction qui :

1. reçoit un tableau de livres et un élément DOM conteneur ;
2. transforme chaque livre en carte grâce à `map()` et `createBookCard()` ;
3. ajoute toutes les cartes dans le conteneur ;
4. ne retourne rien d'obligatoire.

Tu peux insérer plusieurs nœuds avec :

```js
container.append(...elements);
```

Le `...` transmet chaque élément du tableau séparément à `append()`. Ce n'est pas la solution de l'exercice : c'est uniquement l'outil d'insertion.

### 3. Point d'entrée

Dans `main.js` :

1. importe les données et la fonction d'affichage ;
2. sélectionne `#books-list` ;
3. vérifie que le conteneur existe ;
4. appelle `renderBooks()` avec les bons arguments.

Si le conteneur est introuvable, affiche une erreur claire dans la console et n'appelle pas la fonction.

## Contraintes

- utiliser `document.createElement()` ;
- utiliser `textContent`, jamais `innerHTML` ;
- utiliser `map()` dans `renderBooks()` ;
- ne pas écrire de carte en dur dans `index.html` ;
- ne pas importer `books` dans `createBookCard.js` ou `renderBooks.js` ;
- ne pas utiliser de variable globale ;
- ne pas ajouter d'événement aujourd'hui ;
- ne pas utiliser de framework ou de bibliothèque.

## Avant de coder — algorithme obligatoire

Écris deux algorithmes distincts.

```text
ALGORITHME createBookCard

ENTREE
    ...

SORTIE
    ...

DEBUT
    ...
FIN
```

```text
ALGORITHME renderBooks

ENTREES
    ...

SORTIE
    ...

DEBUT
    ...
FIN
```

Ton pseudo-code doit faire apparaître la différence fondamentale :

- `createBookCard()` transforme **un livre** en **un article DOM** ;
- `renderBooks()` transforme **une collection** en **plusieurs cartes**, puis les insère.

## Questions de compréhension

Réponds avant de coder :

1. Pourquoi `createBookCard()` doit-elle retourner l'article au lieu de l'ajouter directement dans `#books-list` ?
2. Quelle valeur contient le tableau produit par `map()` dans `renderBooks()` : des chaînes, des livres ou des éléments DOM ?
3. Pourquoi `textContent` est-il préférable à `innerHTML` ici ?
4. Pourquoi le conteneur est-il passé en paramètre à `renderBooks()` ?
5. Si le tableau contient quatre livres, combien de fois `createBookCard()` doit-elle être appelée ?

## Résultat attendu

La page affiche quatre articles. L'inspecteur doit montrer une structure comparable à celle-ci pour chaque carte :

```html
<article class="book-card is-available" data-book-id="1">
  <h3>Dune</h3>
  <!-- auteur, année et disponibilité -->
</article>
```

Cette structure est un repère, pas un bloc à copier : les éléments manquants doivent être créés par ton JavaScript.

## Vérifications manuelles

- recharge la page : il ne doit y avoir aucune erreur dans la console ;
- compte les cartes : exactement quatre ;
- inspecte l'article de `Dune` : `data-book-id="1"` ;
- inspecte les classes de disponibilité ;
- désactive JavaScript : les titres généraux restent présents, mais les cartes disparaissent ;
- vérifie que le tableau `books` n'a pas été modifié.

## Critères de validation

- les cinq fichiers demandés sont correctement reliés ;
- les deux fonctions utilisent exclusivement leurs paramètres ;
- `createBookCard()` retourne bien un élément DOM ;
- `renderBooks()` emploie `map()` ;
- quatre cartes sont affichées sans duplication HTML ;
- aucune utilisation de `innerHTML` ;
- noms de fonctions et variables explicites ;
- pseudo-code cohérent avec le code final ;
- réponses de compréhension correctes.

## Livrables

Envoie :

- tes réponses aux cinq questions ;
- les deux algorithmes ;
- `index.html` ;
- `data.js` ;
- `createBookCard.js` ;
- `renderBooks.js` ;
- `main.js`.

## Suivi de progression avant correction

### Maîtrisé

- `filter()` pour conserver plusieurs éléments ;
- `find()` pour récupérer un élément ;
- modules ES simples.

### En cours d'évaluation

- `map()` et création de nouveaux objets ;
- formatage de valeurs ;
- absence de mutation.

### Fragile

- pseudo-code algorithmique précis ;
- distinction entre données importées et paramètres ;
- cheminement d'une valeur entre plusieurs fonctions.

### À évaluer aujourd'hui

- sélection d'un élément DOM ;
- création de nœuds ;
- séparation entre création et affichage ;
- transformation de données en interface ;
- contrôle défensif d'un sélecteur DOM.
