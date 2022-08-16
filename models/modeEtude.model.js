const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeEtudeSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeEtude = mongoose.model('mode etude',  modeEtudeSchema); 
                                        
module.exports = modeEtude;