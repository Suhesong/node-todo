var express=require('express');
var todoController=require('./controllers/todoController');

var app=express();

app.set('view engine','pug');

app.use(express.static('./public'));

todoController(app);
app.listen(3000,()=>{
    console.log('port 3000 open');
})