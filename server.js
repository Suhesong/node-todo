var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var multer = require('multer');

var indexRouter = require('./router/index');
var usersRouter = require('./router/users');
app = express();


app.set('view engine','pug')
app.use('/', indexRouter);
app.use('/users', usersRouter)

app.listen(3000, () => {
    console.log("listening to port 3000");
});