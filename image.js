var multer=require('multer');

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