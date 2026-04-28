# Troll Weather Absorber

Mini jeu de plateforme / puzzle pour la jam "Little Guy" + "Weather".

Concept principal :
Un petit troll traverse un monde naturel gigantesque et utilise les pouvoirs de la meteo pour resoudre de petits puzzles de plateforme.

## Scope final de la jam

- Pas d'ennemis
- Pas de combat
- Niveaux courts et lisibles
- Ton doux et accessible
- Focus sur la pluie, le vent, les graines, les feuilles et le deplacement

## Piliers du gameplay

- Le troll est minuscule dans un grand monde naturel
- Le monde doit sembler vivant, doux et accueillant
- Les puzzles doivent rester simples et lisibles
- Les deplacements et interactions doivent etre immediats
- Le jeu doit etre finissable pendant la jam

## Mecaniques finales a garder

- `Pluie`
  - Sert a faire pousser les plantes sur les bons emplacements
  - Peut aussi servir a quelques interactions environnementales simples

- `Vent`
  - Sert a activer des interactions liees a l'air
  - Sert a planer quand une feuille est disponible

- `Graines`
  - Ressource limitee
  - Recuperees sur des plantes dediees
  - Consommees automatiquement quand on utilise la pluie sur un point de pousse valide

- `Feuilles`
  - Ressource limitee
  - Recuperees sur des plantes dediees
  - Consommees automatiquement quand on utilise le vent pour planer

- `Respawn`
  - Reapparition rapide apres une chute ou un echec
  - Pas de punition lourde

## Elements coupes pour la jam

- Ennemis
- Combat
- Systeme de degats
- Gameplay de foudre offensive
- Systeme d'escalade
- Physique de radeau
- Inventaire complexe
- Grands niveaux ouverts
- Trop de pouvoirs differents

Tout ce qui est coupe ici pourra etre repris apres la jam si la base du jeu est terminee.

## Roadmap de developpement

Suivre cet ordre et eviter de sauter des etapes tant que la precedente n'est pas stable.

### Etape 1 - Coeur jouable

Objectif :
Avoir le jeu jouable le plus vite possible.

Taches :
- Creer le controle du troll
- Ajouter deplacement gauche / droite
- Ajouter saut
- Ajouter gravite et collisions
- Ajouter un systeme simple de respawn
- Ajouter un niveau de test temporaire avec des blocs
- Ajouter une camera ou un cadrage fixe selon la solution la plus rapide

Condition de validation :
- Le troll peut bouger, sauter, tomber, reapparaitre et traverser un niveau simple sans bug majeur

### Etape 2 - Prototype des pouvoirs

Objectif :
Valider les deux pouvoirs principaux avant de lancer une grosse production d'assets.

Taches :
- Ajouter le switch entre `Pluie` et `Vent`
- Ajouter la visee avec la souris
- Ajouter une premiere cible pour la pluie
- Ajouter une premiere cible pour le vent
- Afficher le pouvoir actif a l'ecran

Condition de validation :
- Le joueur comprend comment changer de pouvoir et l'utiliser sur des elements du niveau

### Etape 3 - Prototype des ressources

Objectif :
Rendre les graines et les feuilles lisibles et automatiques.

Taches :
- Ajouter les plantes qui donnent des graines
- Ajouter les plantes qui donnent des feuilles
- Ajouter un compteur `Graines` et `Feuilles`
- Faire consommer automatiquement une graine sur un point de pousse valide avec la pluie
- Faire consommer automatiquement une feuille au debut d'un plane
- Ajouter un retour simple si le joueur n'a pas la ressource necessaire

Condition de validation :
- Le joueur peut ramasser, depenser et comprendre les deux ressources sans bouton supplementaire complexe

### Etape 4 - Objets de puzzle

Objectif :
Construire le minimum d'objets reutilisables pour tous les niveaux de la jam.

Taches :
- Point de pousse pour `Graine + Pluie`
- Resultat en pont vegetal ou plateforme vegetale
- Resultat en ascenseur vegetal ou grande fleur
- Passage de plane pour `Feuille + Vent`
- Objet active par le vent comme herbe, petales ou totem venteux
- Trou d'eau avec rondins de bois

Condition de validation :
- Un petit set d'objets permet deja de creer plusieurs idees de puzzles

### Etape 5 - Langage visuel

Objectif :
Rendre les mecaniques lisibles avant de polir tout le style graphique.

Taches :
- Donner une silhouette claire a chaque objet interactif
- Differencier visuellement les plantes a graines et les plantes a feuilles
- Rendre les points de pousse faciles a identifier
- Rendre les cibles de pluie et de vent lisibles au premier regard
- Ajouter des icones simples pour le pouvoir actif, les graines et les feuilles

Condition de validation :
- Un nouveau joueur peut comprendre ce qui est interactif juste en observant

### Etape 6 - Assets du personnage

Objectif :
Integrer uniquement les assets necessaires au personnage.

Taches :
- Importer les morceaux face et cote du troll
- Assembler le personnage dans le moteur ou dans le workflow d'animation choisi
- Ajouter le minimum d'animations :
  - idle
  - marche
  - saut / chute
  - plane
- Ajouter si possible une pose baton / pouvoir

Condition de validation :
- Le troll semble assez vivant pour porter visuellement le jeu

### Etape 7 - Assets d'environnement

Objectif :
Creer uniquement ce qui est necessaire pour l'ambiance finale de la jam.

Assets prioritaires :
- Herbe
- Terre
- Petites fleurs
- Grandes fleurs
- Pissenlits
- Feuilles
- Eau
- Rondins
- Graines / plantes a graines
- Plantes a feuilles
- Insectes decoratifs

Vie ambiante optionnelle :
- Papillon
- Coccinelle
- Escargot

Condition de validation :
- Le monde transmet clairement le fantasme "Little Guy"

### Etape 8 - Level design

Objectif :
Construire peu de niveaux, mais des niveaux courts et concentres.

Structure recommandee :
- Niveau 1 : tutoriel deplacement + pluie + premier puzzle a graine
- Niveau 2 : tutoriel vent + premier puzzle de feuille / plane
- Niveau 3 : combinaison pluie + vent dans une petite sequence
- Niveau 4 : niveau final optionnel si le temps le permet

Regles de level design :
- Une idee principale par niveau
- Introduire, repeter, combiner
- Ne jamais noyer le joueur
- Les puzzles doivent etre lisibles en quelques secondes
- Les ressources doivent rester assez proches pour eviter la frustration

Condition de validation :
- Chaque niveau enseigne une chose clairement et se termine sans confusion

### Etape 9 - Feedback et juice

Objectif :
Ajouter du charme seulement une fois la boucle de jeu stable.

Taches :
- Sons simples pour pickup, pluie, vent, pousse, plane et chute dans l'eau
- Petites particules pour pluie et vent
- Animation de pousse des plantes
- Mouvement leger dans l'herbe et les fleurs
- Transition rapide au respawn
- Reactions douces des petites creatures decoratives

Condition de validation :
- Le jeu semble vivant sans ajouter de nouveaux systemes

### Etape 10 - UX et clarte

Objectif :
Supprimer la confusion et les frottements inutiles.

Taches :
- Ajouter une petite interface pour le pouvoir actif et les ressources
- Ajouter un minimum de textes d'aide seulement si necessaire
- Verifier que tous les objets importants sont assez visibles
- Rendre l'echec lisible et juste
- Verifier que le respawn est tres rapide

Condition de validation :
- Un joueur peut comprendre le jeu sans longues explications

### Etape 11 - Phase de test

Objectif :
Trouver ce qui casse le jeu ou embrouille le joueur.

Taches :
- Tester chaque niveau du debut a la fin
- Tester tous les respawns
- Tester tous les pickups de ressources
- Tester le switch des pouvoirs partout
- Tester les cas ou une ressource manque
- Tester soigneusement les passages de plane
- Supprimer tout risque de softlock

Condition de validation :
- Le jeu est court mais stable

### Etape 12 - Polish final de jam

Seulement si le jeu est deja complet.

Taches :
- Ameliorer la presentation du menu
- Nettoyer les textes et l'interface
- Ajouter les credits finaux
- Ajuster le volume de la musique et des sons
- Ameliorer les transitions entre scenes
- Corriger les incoherences visuelles

Condition de validation :
- Le jeu donne une impression de produit fini, meme s'il reste petit

## Priorites de production

Si le temps devient serre, garder cet ordre de priorite :

1. Deplacements jouables
2. Interactions pluie et vent
3. Graines et feuilles
4. Niveaux courts terminables
5. Respawn et clarte
6. Integration des assets de base
7. Sons et polish
8. Vie decorative supplementaire

## Regles pour proteger le scope

- Si une feature demande un nouveau set d'animations, il faut la questionner
- Si une feature demande une physique complexe, il faut la couper
- Si une feature peut creer un softlock, il faut la simplifier
- Si une feature n'est pas necessaire pour finir le jeu, elle passe apres la jam
- Finir un petit jeu vaut mieux que commencer un jeu plus gros

## Definition du jeu termine pour la jam

La version jam est consideree terminee quand :
- Le troll se controle bien
- La pluie et le vent fonctionnent
- Les graines et les feuilles sont comprenables
- Au moins 3 niveaux courts sont complets
- Le jeu peut etre termine du debut a la fin
- Le joueur peut echouer et reapparaitre rapidement
- Le theme "Little Guy" et "Weather" est lisible visuellement

## Idees pour l'apres-jam

A garder pour plus tard :
- Plus de pouvoirs meteo
- Interactions a la foudre
- Systemes de creatures amies plus pousses
- Animation environnementale plus riche
- Niveaux plus grands
- Traversals supplementaires
- Univers et narration plus developpes
