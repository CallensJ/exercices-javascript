# Exercice JavaScript 02 — Nettoyer et filtrer une liste de prospects

## Objectif

Travailler plusieurs notions fondamentales utiles pour `prospect_engine` :

- tableaux d’objets ;
- chaînes de caractères ;
- conditions ;
- création d’un nouveau tableau ;
- normalisation de données ;
- validation simple ;
- fonctions.

L’idée est de commencer à manipuler des données imparfaites, parce que dans la vraie vie les données propres semblent être considérées comme une atteinte aux traditions humaines.

---

## Données de départ

```js
const prospects = [
  {
    id: 1,
    name: "  Boulangerie du Centre ",
    city: "NÎMES",
    email: "CONTACT@BOULANGERIE.FR",
    active: true
  },
  {
    id: 2,
    name: "Pizza Roma",
    city: " nîmes ",
    email: "",
    active: true
  },
  {
    id: 3,
    name: "Garage Martin ",
    city: "ALES",
    email: "garage@martin.fr ",
    active: false
  },
  {
    id: 4,
    name: " Café des Arts ",
    city: "Nîmes",
    email: "CAFE@ARTS.FR",
    active: true
  }
];
```

---

## Mission

Écris une fonction :

```js
function cleanProspects(prospects) {
  // ton code
}
```

La fonction doit retourner **un nouveau tableau** contenant uniquement les prospects valides.

Un prospect est considéré comme valide lorsque :

- `active` vaut `true` ;
- son `email` n’est pas vide.

---

## Nettoyage à effectuer

Pour chaque prospect conservé :

### `name`

Supprime les espaces inutiles au début et à la fin.

Exemple :

```js
"  Boulangerie du Centre "
```

devient :

```js
"Boulangerie du Centre"
```

### `city`

Supprime les espaces au début et à la fin puis transforme la ville en minuscules.

Exemple :

```js
" NÎMES "
```

devient :

```js
"nîmes"
```

### `email`

Supprime les espaces au début et à la fin puis transforme l’adresse en minuscules.

Exemple :

```js
" CONTACT@BOULANGERIE.FR "
```

devient :

```js
"contact@boulangerie.fr"
```

---

## Résultat attendu

Avec les données fournies, le résultat devrait correspondre à :

```js
[
  {
    id: 1,
    name: "Boulangerie du Centre",
    city: "nîmes",
    email: "contact@boulangerie.fr",
    active: true
  },
  {
    id: 4,
    name: "Café des Arts",
    city: "nîmes",
    email: "cafe@arts.fr",
    active: true
  }
]
```

---

## Contraintes

Tu ne dois pas modifier le tableau original `prospects`.

Tu dois créer un nouveau tableau :

```js
const cleanedProspects = [];
```

Tu dois parcourir les prospects avec :

```js
for
```

ou :

```js
for...of
```

Tu peux utiliser les méthodes de chaînes de caractères :

```js
trim()
toLowerCase()
```

Tu ne dois pas utiliser :

```js
filter()
map()
reduce()
```

pour cet exercice.

Le but est de comprendre les étapes manuellement avant de déléguer le travail à ces méthodes.

---

## Avant de coder

Écris d’abord un pseudo-code décrivant ton algorithme.

Ton pseudo-code doit au minimum répondre à ceci :

1. Créer le tableau qui contiendra les résultats.
2. Parcourir chaque prospect.
3. Vérifier si le prospect est actif.
4. Vérifier si son email est vide ou non.
5. Ignorer les prospects invalides.
6. Nettoyer les valeurs du prospect valide.
7. Créer un nouvel objet propre.
8. Ajouter ce nouvel objet au tableau de résultats.
9. Retourner le tableau.

---

## Questions de compréhension

Avant ou après ton implémentation, réponds également à ces questions :

1. Pourquoi ne faut-il pas directement modifier `prospect.name`, `prospect.city` et `prospect.email` ?
2. Quelle différence fais-tu entre le tableau original et `cleanedProspects` ?
3. À quoi sert `push()` dans cet exercice ?
4. Pourquoi vérifie-t-on les données avant de créer le nouvel objet ?
5. Quelle différence vois-tu entre cet exercice et l’utilisation directe de `filter().map()` ?

---

## Bonus facultatif

Une fois la version principale terminée, ajoute une propriété :

```js
hasEmail: true
```

dans chaque objet retourné.

Ne fais le bonus que lorsque la version principale fonctionne et que tu peux expliquer chaque ligne de ton code.

---

## Règle de l’exercice

Je veux ton raisonnement avant ton automatisme.

Si tu bloques, écris précisément :

- ce que tu essaies de faire ;
- quelle donnée tu as à ce moment-là ;
- quelle donnée tu veux obtenir.

Le but n’est pas de mémoriser une recette. Le but est de devenir capable de reconstruire la logique toi-même.
