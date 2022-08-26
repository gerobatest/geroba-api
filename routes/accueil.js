const router = require('express').Router(); // route express. c'est un itinéraire
let accueil = require('../models/accueil.model'); //pour exiger le model 


//qui gère les requetes http get entrantes sur le chemin d'URL des utilisateurs avec barre oblique. nous avons donc URL racine 
router.route('/').get((req, res) =>{
    accueil.find() // obtenir les donnée depuis la base de données

    .then(content => res.json(content))
    .catch(err => res.status(400).json('Error: ' * err)); //gère en cas d'erreur
});

router.route('/add').post((req, res) => { //une requete Post 

    const para1 = req.body.para1;
    const para2 = req.body.para2;
    const para3 = req.body.para3;
    const para4 = req.body.para4;
    const para5 = req.body.para5;
    const para6 = req.body.para6;

    const newAccueil = new accueil({
        para1, 
        para2, 
        para3, 
        para4,
        para5,
        para6
    });

    newAccueil.save()
     .then(() => res.json('Content (accueil) added!'))
     .catch(err => res.status(400).json('Error: ' + err));
});

/*router.route('/:id').get((req, res) => {
    accueil.findById(req.params.id)
      .then(content => res.json(content))
      .catch(err => res.status(400).json('Error: ' + err));
  });


//mise à jour by id
router.route('/update/:id').post((req, res) => {
    accueil.findById(req.params.id)
      .then(content => {
        content.para1 = req.body.para1;
        content.para2= req.body.para2;
        content.para3= req.body.para3;
        content.para4= req.body.para4;
  
        content.save()
          .then(() => res.json('content updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });*/
  
module.exports = router;