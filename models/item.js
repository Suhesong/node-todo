var mongoose=require('mongoose');

var itemSchema=mongoose.Schema({
    item:String
});

mongoose.model('Item',itemSchema);