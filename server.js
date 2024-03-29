const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 9000;


const corsOptions ={
  origin:'*', 
  credentials:true,         
  optionSuccessStatus:200
}

app.use(cors(corsOptions));

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
const fonctionsRouter = require ('./routes/fonctions');
const telechargementRouter = require('./routes/telechargement');
const demoRouter = require('./routes/demo');
const modeExistantRouter = require('./routes/modeExistant');
const modeEtudeRouter = require('./routes/modeEtude');
const modeStocksRouter = require('./routes/modeStocks');
const modeTravauxRouter = require('./routes/modeTravaux');
const modeGestionRouter = require('./routes/modeGestion');
const tarificationRouter = require('./routes/tarification');

app.use('/login', loginRouter);
app.use('/accueil', accueilRouter);
app.use('/aPropos', aProposRouter);
app.use('/fonctions', fonctionsRouter);
app.use('/telechargement', telechargementRouter);
app.use('/demo', demoRouter);
app.use('/modeExistant', modeExistantRouter); 
app.use('/modeEtude', modeEtudeRouter);  
app.use('/modeStocks', modeStocksRouter);     
app.use('/modeTravaux', modeTravauxRouter);  
app.use('/modeGestion', modeGestionRouter);  
app.use('/tarification', tarificationRouter); 

//le port 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})

