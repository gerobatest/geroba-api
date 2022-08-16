const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeGestionSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeGestion = mongoose.model('mode gestion',  modeGestionSchema); 
                                        
module.exports = modeGestion;