var express = require('express'),
    app = express(),
    logger = require('morgan'),
    post = require('./routes/post');


/************ middleware ********************/
/* ログ出力 */
app.use(logger('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded());
// app.use(express.methodOverride());



/************ APIs *************************/
app.get('/', post.index);
app.get('/posts/:id', post.show);



app.listen(3000);
console.log("server starting...");