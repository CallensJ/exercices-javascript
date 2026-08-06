# Exercices JavaScript

Ce repo regroupe une série d'exercices JavaScript vanilla, pratiqués au quotidien.

## Objectif

Rester performant en JavaScript **sans dépendre de l'IA** pour résoudre les problèmes.
Chaque jour, ChatGPT fournit un nouvel exercice à réaliser seul, avec une difficulté qui
augmente progressivement : du niveau débutant jusqu'au niveau professionnel / expert / guru.

L'IA (Claude) n'intervient ici que pour l'outillage du repo (structure, config, hub) —
jamais pour résoudre les exercices eux-mêmes.

## Structure

```
.
├── index.html          # Hub : liste tous les exercices sous forme de cards
├── src/
│   ├── exercises.js     # Liste des exercices affichés sur le hub
│   ├── main.js
│   └── style.css
└── exercices/
    └── <nom-exercice>/
        ├── index.html
        ├── main.js
        └── style.css
```

Chaque exercice est une mini page HTML/JS/CSS indépendante, accessible depuis le hub racine.

## Ajouter un exercice

1. Créer un dossier dans `exercices/<nom-exercice>/` avec un `index.html` (et
   `main.js`/`style.css` si besoin).
2. Ajouter une entrée dans `src/exercises.js` (titre, description, chemin) pour qu'il
   apparaisse sur le hub.

## Commandes

Le projet utilise [pnpm](https://pnpm.io/).

```bash
pnpm install   # installe les dépendances
pnpm dev       # lance le serveur de dev
pnpm build     # build toutes les pages (hub + exercices) dans dist/
pnpm preview   # prévisualise le build
```
