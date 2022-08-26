const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const modeStocksSchema = new Schema({
    para1:{
        type: String 
    }, 
    para2:{
        type: String
    }
});

//nom de la collection
const modeStocks = mongoose.model('mode stocks',  modeStocksSchema); 
                                        
module.exports = modeStocks;