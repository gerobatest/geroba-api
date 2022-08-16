const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeExistantSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeExistant = mongoose.model('mode existant',  modeExistantSchema); 
                                        
module.exports = modeExistant;