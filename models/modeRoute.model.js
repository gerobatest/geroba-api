const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeRouteSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeRoute = mongoose.model('mode route et batiment',  modeRouteSchema); 
                                        
module.exports = modeRoute;