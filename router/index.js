var express=require('express');
var bodyParser=require('body-parser');
var urlencodeParser=bodyParser.urlencoded({extend:false});
var router=express.Router();
var data=[{item:'go to drink'},{item:'hava lunch'},{item:'walk dog'}]

router.post('/',urlencodeParser,(req,res,next)=>{
console.log(req.body);
res.send('ok');
});

router.get('/',(req,res,next)=>{
    res.render('todo',{todos:data});
})

module.exports=router;