const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeDepotSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeDepot= mongoose.model('mode depot',  modeDepotSchema); 
                                        
module.exports = modeDepot;