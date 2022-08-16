const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeTravauxSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const  modeTravaux = mongoose.model('mode travaux',  modeTravauxSchema); 
                                        
module.exports =  modeTravaux;