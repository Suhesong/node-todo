var express =require('express');
var bodyParser=require('body-parser');
var fs=require('fs');
var multer=require('multer');

app=express();

var jsonParser=bodyParser.json();
var urlencodePaerser=bodyParser.urlencoded({extended:false});

var createFolder=function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
}


var uploadFolder = './upload/';
createFolder(uploadFolder);

var storage =multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,uploadFolder);
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});

app.get('/form',(req,res)=>{
    var form=fs.readFileSync('./html/form.html',{encoding:"utf-8"});
    res.send(form);
})

var upload =multer({storage:storage});

app.post('/upload',upload.single('logo'),(req,res)=>{
    console.dir(req.file);
    res.send({'ret_code':'0'});
});

app.get('/:id/user/:dd',(req,res)=>{
    var req1=req.params;
        res.send(req1);
});


app.post('/user',urlencodePaerser,(req,res)=>{
    console.log(req.body);
    res.send(req.body.name);
})

app.post('/review',jsonParser,(req,res)=>{
    console.log(req.body);
    res.send(req.body);
});


app.get('/user/ab?cd',(req,res)=>{
    var req1=req.params.id;
    console.log(req1);
    res.send('ok');
});
app.listen(3000,()=>{
    console.log("listening to port 3000");
});