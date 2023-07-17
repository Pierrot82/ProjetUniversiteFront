# ProjetUniversiteFront
Le Projet est généré avec [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3

## Comment importer le projet?
Utiliser la commande:  
`git clone https://github.com/Pierrot82/ProjetUniversiteFront.git`

### Installation des modules:
`npm install`

### Lancer l'application:
```npm run start```

## Détails sur le projet
pr simplifier l'implé on a décidé de faire une uni spécialisée ou 1 prof = une matiere et iversement

comme pas de role : structure de la page : onglet = role
ex : sous etudiants : toutes les action qu'il peut réaliser

pr import image rajouter ces lignes dans le application properties

spring.servlet.multipart.enabled=true
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=10MB

l'image ne s'enregistre pas en BDD car elle ne se transforme pas en string
avec un serveur externe on aurait pu facilement stocker les images/fichiers


