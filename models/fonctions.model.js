const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fonctionsSchema = new Schema({
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
    },
});

//nom de la collection
const fonctions = mongoose.model('fonctions',  fonctionsSchema); 
                                        
module.exports = fonctions;