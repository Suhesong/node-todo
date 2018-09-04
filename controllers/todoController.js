var bodyParser=require('body-parser');
var urlencodeParser=bodyParser.urlencoded({extend:false});
var mongoose=require('mongoose');
require('../models/item');

var Item= mongoose.model('Item');
mongoose.connect("mongodb://localhost/item",{ useNewUrlParser: true },(err)=>{
    if(err) throw err;
    console.log("database connect success");
});



var data=[{item:'go to drink'},{item:'hava lunch'},{item:'walk dog'}]

module.exports=function(app){
    app.get('/todo',(req,res)=>{
       Item.find({},(err,data)=>{
           if(err) throw err;
           res.render('todo',{todos:data});
       })
    });

    app.post('/todo',urlencodeParser,(req,res)=>{
        var item=Item(req.body).save((err,data)=>{
            if(err) throw err;
            res.json(data);
            console.log('save it');
        });
    });

    app.delete('/todo/:item', function(req, res) {
        // data = data.filter(function(todo) {
        //   return todo.item.replace(/ /g, "-") !== req.params.item;
        // });
        // res.json(data);

        console.log(req.params.item.replace(/-/g," "));
        Item.findOneAndDelete({item:req.params.item.replace(/-/g," ")},(err,data)=>{
            if(err) throw err
            res.json('Successfully removed');
        });
      });

}