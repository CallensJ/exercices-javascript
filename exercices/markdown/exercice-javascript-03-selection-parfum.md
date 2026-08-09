# Exercice JavaScript 03 — Sélectionner un parfum et mettre à jour l’interface

## Contexte

À partir de cet exercice, on commence doucement le projet fil rouge : un site single-page fictif de parfum haut de gamme.

Pas encore de GSAP. Avant d’animer une interface, il faut déjà savoir la contrôler proprement en JavaScript.

## Objectif

Travailler les tableaux d’objets, `find()`, les événements `click`, le DOM et la séparation entre données et affichage.

## Données de départ

```js
const perfumes = [
  {
    id: 1,
    name: "Noir Absolu",
    family: "Boisé ambré",
    description: "Une composition sombre mêlant bois fumés, ambre et épices.",
    price: 145
  },
  {
    id: 2,
    name: "Éclat Blanc",
    family: "Floral musqué",
    description: "Un parfum lumineux construit autour du jasmin et des muscs blancs.",
    price: 130
  },
  {
    id: 3,
    name: "Velours Rouge",
    family: "Oriental épicé",
    description: "Une fragrance chaude où se rencontrent vanille, cuir et poivre rose.",
    price: 160
  }
];
```

## HTML de départ

```html
<section class="collection">
  <div class="perfume-list">
    <button class="perfume-button" data-id="1">Noir Absolu</button>
    <button class="perfume-button" data-id="2">Éclat Blanc</button>
    <button class="perfume-button" data-id="3">Velours Rouge</button>
  </div>

  <article class="perfume-details">
    <h2 id="perfume-name">Sélectionne un parfum</h2>
    <p id="perfume-family"></p>
    <p id="perfume-description"></p>
    <strong id="perfume-price"></strong>
  </article>
</section>
```

## Mission

Lorsque l’utilisateur clique sur un bouton de parfum :

1. récupère l’`id` contenu dans `data-id` ;
2. retrouve le parfum correspondant dans le tableau `perfumes` ;
3. affiche ses informations dans `.perfume-details`.

## Contraintes

Tu dois utiliser :

```js
querySelectorAll()
addEventListener()
find()
```

Tu ne dois pas modifier le tableau `perfumes`.

Tu ne dois pas recopier les données des parfums dans des `if`.

## Fonction demandée

```js
function displayPerfume(perfume) {
  // mise à jour du DOM
}
```

Cette fonction doit uniquement afficher un parfum. La recherche et la gestion du clic restent en dehors.

## Avant de coder

Écris ton pseudo-code et explique :

1. comment récupérer tous les boutons ;
2. comment écouter le clic sur chacun ;
3. comment récupérer l’id du bouton cliqué ;
4. pourquoi il faut probablement convertir cet id ;
5. comment retrouver le bon objet dans `perfumes` ;
6. comment transmettre cet objet à `displayPerfume()`.

## Questions de compréhension

1. Quelle différence entre `event.target.dataset.id` et l’`id` numérique du tableau ?
2. Pourquoi `find()` est-il plus adapté ici que `filter()` ?
3. Pourquoi séparer `displayPerfume()` de la logique du clic ?
4. Que devrait faire ton code si aucun parfum n’est trouvé ?

## Bonus facultatif

Ajoute une classe :

```css
.perfume-button--active
```

au bouton sélectionné. Le bouton précédemment sélectionné doit perdre cette classe.

## Ce qui est évalué

- événements ;
- lien entre attributs HTML et données JS ;
- utilisation de `find()` ;
- mise à jour du DOM ;
- séparation des responsabilités ;
- capacité à expliquer ton code.

## Règle

Je veux d’abord ton raisonnement ou ton pseudo-code, ensuite seulement ton implémentation.
