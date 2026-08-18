# Exercice JavaScript 06 — Transformer des produits avec `map()`

## Contexte

Une petite boutique possède une liste de produits. L'interface n'a pas besoin de tous les détails : elle attend un nouveau tableau contenant uniquement les informations utiles à l'affichage.


## Objectif pédagogique

Apprendre à utiliser `map()` pour transformer chaque élément d'un tableau et obtenir un **nouveau tableau de même longueur**.

À la fin, tu dois pouvoir expliquer clairement :

- pourquoi `map()` ne sert pas à rechercher un élément ;
- pourquoi `map()` ne sert pas à supprimer des éléments ;
- ce que retourne la fonction passée à `map()` ;
- pourquoi le tableau original ne doit pas être modifié.

## Fichiers à créer

```text
exercice-06/
├── data.js
├── formatProducts.js
├── main.js
└── package.json
```

Dans `package.json`, ajoute :

```json
{
  "type": "module"
}
```

## Données de départ

Dans `data.js`, exporte ce tableau :

```js
export const products = [
  { id: 1, name: "clavier mécanique", price: 89.9, stock: 7 },
  { id: 2, name: "souris sans fil", price: 39.5, stock: 0 },
  { id: 3, name: "support écran", price: 54, stock: 12 },
  { id: 4, name: "lampe de bureau", price: 29.99, stock: 3 },
];
```

## Travail demandé

Crée dans `formatProducts.js` une fonction :

```js
formatProducts(products)
```

Elle doit retourner un nouveau tableau. Chaque objet retourné doit avoir exactement cette structure :

```js
{
  id: 1,
  label: "CLAVIER MÉCANIQUE — 89.90 €",
  available: true
}
```

Règles :

- `id` conserve la valeur originale ;
- `label` contient le nom en majuscules, un tiret long, puis le prix avec exactement deux décimales et le symbole euro ;
- `available` vaut `true` lorsque le stock est supérieur à zéro, sinon `false` ;
- le tableau `products` et ses objets ne doivent pas être modifiés.

## Contraintes

- utiliser `map()` ;
- ne pas utiliser `for`, `while`, `forEach()`, `filter()` ou `find()` ;
- ne pas utiliser `push()` ;
- ne pas modifier les objets reçus ;
- la fonction doit utiliser son paramètre, pas importer directement `products` ;
- séparer les données, la fonction et le point d'entrée dans trois fichiers.

## Avant de coder — pseudo-code obligatoire

Complète d'abord cet algorithme avec tes propres mots :

```text
ALGORITHME formatProducts

ENTREE
    ...

SORTIE
    ...

DEBUT
    POUR CHAQUE ...
        ...
        ...
        RETOURNER ...
    FIN POUR

    RETOURNER ...
FIN
```

Attention : il y a deux niveaux de retour à comprendre. La fonction de transformation retourne un objet pour chaque produit, puis `map()` construit le nouveau tableau que `formatProducts()` retourne.

## Vérification dans `main.js`

1. Importe `products`.
2. Importe `formatProducts`.
3. Appelle la fonction en lui passant `products`.
4. Affiche le tableau transformé avec `console.table()`.
5. Affiche ensuite le tableau original avec un second `console.table()`.

Tu dois constater :

- quatre produits au départ et quatre résultats à l'arrivée ;
- aucune propriété `label` ou `available` ajoutée aux objets originaux ;
- le produit en rupture possède `available: false` ;
- tous les prix possèdent deux décimales.

## Résultat attendu

Le premier élément du nouveau tableau correspond à :

```js
{
  id: 1,
  label: "CLAVIER MÉCANIQUE — 89.90 €",
  available: true
}
```

Le deuxième possède `available: false`.

Le reste du tableau constitue ton travail : ne recopie pas une correction générée par une IA. Ce serait réussir à tromper une feuille de papier, exploit remarquable uniquement pour la feuille.

## Questions de compréhension

Réponds sans exécuter de code :

1. Si `products` contient quatre éléments, combien d'éléments `map()` retourne-t-il ?
2. Pourquoi `filter()` serait-il incorrect pour cet objectif ?
3. Quelle différence fais-tu entre l'objet retourné par la callback et le tableau retourné par `map()` ?
4. Que se passerait-il si la callback ne contenait aucun `return` ?

## Critères de validation

- le programme s'exécute avec Node sans erreur ;
- `formatProducts()` utilise son paramètre ;
- `map()` est correctement utilisé ;
- la longueur du tableau est conservée ;
- les nouveaux objets ont exactement trois propriétés ;
- les prix utilisent deux décimales ;
- le tableau original reste intact ;
- le pseudo-code décrit réellement la transformation ;
- les quatre réponses montrent que tu comprends le mécanisme.

## Suivi de progression avant correction

### Maîtrisé

- `filter()` pour conserver plusieurs éléments selon une condition ;
- `find()` pour récupérer un seul élément ;
- imports et exports simples.

### Fragile

- pseudo-code algorithmique `ENTREE / SORTIE / DEBUT / FIN` ;
- distinction entre le paramètre d'une fonction et une variable importée ;
- vérification systématique de l'absence de mutation.

### À évaluer avec cet exercice

- transformation avec `map()` ;
- création d'un nouvel objet dans une callback ;
- différence entre le retour de la callback et le retour de la fonction principale ;
- formatage d'une chaîne et d'un nombre.
