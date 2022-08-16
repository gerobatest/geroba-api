const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//const jwt = require("jsonwebtoken");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000; //port


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNeWUrlParser: true, useUnifiedTopology: true})

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connection established succesfully");
})


//les routes 
const loginRouter = require('./routes/login');
const accueilRouter = require('./routes/accueil');
const aProposRouter = require ('./routes/aPropos');
const telechargementRouter = require('./routes/telechargement');
const demoRouter = require('./routes/demo');
const modeExistantRouter = require('./routes/modeExistant');
const modeEtudeRouter = require('./routes/modeEtude');
const modeDepotRouter = require('./routes/modeDepot');
const modeTravauxRouter = require('./routes/modeTravaux');
const modeGestionRouter = require('./routes/modeGestion');
const modeRouteRouter = require('./routes/modeRoute');


app.use('/login', loginRouter);
app.use('/accueil', accueilRouter);
app.use('/aPropos', aProposRouter);
app.use('/telechargement', telechargementRouter);
app.use('/demo', demoRouter);
app.use('/modeExistant', modeExistantRouter); 
app.use('/modeEtude', modeEtudeRouter);  
app.use('/modeDepot', modeDepotRouter);     
app.use('/modeTravaux', modeTravauxRouter);  
app.use('/modeGestion', modeGestionRouter);  
app.use('/modeRoute', modeRouteRouter);  


//le port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})


//Eviter les erreurs cors 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
