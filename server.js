const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

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


app.use('/login', loginRouter);
app.use('/accueil', accueilRouter);
app.use('/aPropos', aProposRouter);
app.use('/telechargement', telechargementRouter);
app.use('/demo', demoRouter);


/*const telechargementSchema = new Schema ({
    _id: new mongoose.Types.ObjectId(),
    para1: 'Les documents importants à télécharger... consectetur adipisclning elit. Suspendisse ert iololl eras pellentesque elementum lobortis. Sed ac rtef nunc auctor, molestie turpis vitae, dapibus magna.',
    para2: 'Integer ut odio vitae ex posuere sollicitudin. Aliquam lobortis tincidunt lorem sed aliquet. Donec libero erat, pulvinar id nunc id, volutpat laoreet tortor. Praesent dapibus lacus molestie dapibus auctor.'
})*/


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