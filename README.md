# ProjetUniversiteFront
Le Projet est généré avec [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3

## Comment importer le projet?
Utiliser la commande:  
`git clone https://github.com/Pierrot82/ProjetUniversiteFront.git`

### Installation des modules:
`npm install`

### Lancer l'application:
`npm run start` ou `ng serve --open`

## Description de l'application
-Partie front-end de l'application
-L'application utilise une API REST retrouvable [ici](https://github.com/Pierrot82/ProjetUniversiteBack)

### Descriptif de l'application
Application de gestion d'une université, de multiples services implémentés:  
-Gestions des candidatures(cadidater, liste des candidats, gestion de leur affectation)  
-Messagerie étudiants professeur()  
-Gestion des examens (création d'examen personnalisé et passage de ceux ci par les étudiants)  
-Statistiques sur l'universite()  

## Détails et difficultés liés au projet
pr simplifier l'implé on a décidé de faire une uni spécialisée ou 1 prof = une matiere et iversement

comme pas de role : structure de la page : onglet = role
ex : sous etudiants : toutes les action qu'il peut réaliser

pr import image rajouter ces lignes dans le application properties

spring.servlet.multipart.enabled=true
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

l'image ne s'enregistre pas en BDD car elle ne se transforme pas en string
avec un serveur externe on aurait pu facilement stocker les images/fichiers


