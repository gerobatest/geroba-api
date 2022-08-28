const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tarificationSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const tarification = mongoose.model('tarification',  tarificationSchema); 
                                        
module.exports = tarification;