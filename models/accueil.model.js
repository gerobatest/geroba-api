const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Les données de la collection accueil
const accueilSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    },
    para3:{
        type: String
    },
    para4:{
        type: String
    },
    para5:{
        type: String
    },
    para6:{
        type: String
    }
});

//nom de la collection
const accueil = mongoose.model('accueil',  accueilSchema); 
                                        
module.exports = accueil;