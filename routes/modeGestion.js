const router = require('express').Router(); // route express. c'est un itinéraire
let modeGestion = require('../models/modeGestion.model'); //pour exiger le model 


//qui gère les requetes http get entrantes sur le chemin d'URL des utilisateurs avec barre oblique. nous avons donc URL racine 
router.route('/').get((req, res) =>{
    modeGestion.find() // obtenir les donnée depuis la base de données

    .then(content => res.json(content))
    .catch(err => res.status(400).json('Error: ' * err)); //gère en cas d'erreur
});

router.route('/add').post((req, res) => { //une requete Post 

    const para1 = req.body.para1;
    const para2 = req.body.para2;

    const newModeGestion = new modeGestion  ({
        para1, 
        para2
    });

    newModeGestion.save()
     .then(() => res.json('Content (modeGestion) added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router; 