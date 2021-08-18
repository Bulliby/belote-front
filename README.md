# belote-front

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Json Format

```json
{
    "action" : "action",
    "data": {}
}
```

action : playingCard
data : PlayerID, Card

action : hand
data : TargetId, Hand

Action et data a fournir a l'aide d'une fonction.
Fonction a utiliser cote serveur egalement


## Idee

On a un etat global de la partie au runtime. On peut également envisage de l'insérer dans le local storage pour récupération en cours d'erreur de connextion.
* Le client au pong qu'il ne recoit pas du server mets la partie dans le local storage
* Après l'authentification le client verifie si une partie est en cours. Propose de la charger. Si l'utilisateur refuse on nettoie la totalite des parties enregistre. Si l'utilisateur accepte il faut voir comment faire. Le co si la table avec id est encore active  

J'installe le serveur sur le kimsuffi pour pouvoir utiliser les client. Cote serveur je fais un mode debug qui logge toute la data envoyé/recu. Dans le client je console.log temporairement les erreurs d'utilisation des cartes.
