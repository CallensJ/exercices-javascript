# Exercice JavaScript 01 — Statistiques d’un panier

## Objectif

Travailler les bases indispensables de JavaScript vanilla :

- tableaux d’objets ;
- boucles ;
- conditions ;
- accumulation de valeurs ;
- fonctions ;
- retour d’un objet calculé.

---

## Données de départ

```js
const products = [
  { id: 1, name: "Riz", price: 8.5, quantity: 2, purchased: false },
  { id: 2, name: "Pain", price: 1.2, quantity: 1, purchased: true },
  { id: 3, name: "Lait", price: 2.5, quantity: 3, purchased: false },
  { id: 4, name: "Café", price: 6.9, quantity: 1, purchased: true },
];
```

---

## Mission

Écris une fonction :

```js
function getCartSummary(products) {
  // ton code
}
```

Cette fonction doit analyser le tableau `products` et retourner un objet contenant les statistiques du panier.

Résultat attendu avec les données fournies :

```js
{
  productCount: 4,
  totalQuantity: 7,
  remainingQuantity: 5,
  totalPrice: 32.8,
  remainingPrice: 24.5
}
```

---

## Signification des propriétés

- `productCount` : nombre de lignes de produits dans le tableau.
- `totalQuantity` : somme de toutes les quantités.
- `remainingQuantity` : quantité totale des produits qui ne sont pas encore achetés.
- `totalPrice` : prix total de tous les produits en tenant compte des quantités.
- `remainingPrice` : prix total des produits non achetés en tenant compte des quantités.

---

## Contraintes

Tu ne dois pas modifier le tableau `products`.

Tu dois utiliser **une seule boucle**, parmi :

```js
for
for...of
```

Tu ne dois pas utiliser :

```js
reduce()
filter()
map()
```

Ton code doit continuer à fonctionner si des produits sont ajoutés ou supprimés du tableau.

---

## Cas particulier

Ton programme doit également fonctionner avec un tableau vide :

```js
getCartSummary([])
```

Résultat attendu :

```js
{
  productCount: 0,
  totalQuantity: 0,
  remainingQuantity: 0,
  totalPrice: 0,
  remainingPrice: 0
}
```

---

## Avant de coder

Écris d’abord ton raisonnement en quelques phrases.

Réponds à ces quatre questions :

1. Quelles variables dois-tu initialiser avant la boucle ?
2. Que dois-tu calculer à chaque passage dans la boucle ?
3. Quelle condition permet de savoir si un produit reste à acheter ?
4. Pourquoi `productCount` ne correspond-il pas forcément à `totalQuantity` ?

Ensuite seulement, écris ta fonction complète.

---

## Règle de l’exercice

Ne cherche pas à produire du code élégant ou compact.

Le but est de vérifier que tu comprends exactement :

- ce que contient chaque variable ;
- ce que fait chaque ligne ;
- comment une boucle accumule des valeurs ;
- comment une condition modifie certains calculs.

Pas de solution copiée. Une tentative imparfaite vaut beaucoup plus qu’un code correct que tu ne comprends pas.
