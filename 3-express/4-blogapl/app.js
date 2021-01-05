var express = require('express'),
    app = express(),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    post = require('./routes/post');


/************ middleware ********************/
/* ログ出力 */
app.use(logger('dev'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

// middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(methodOverride('_method'));  // PUT, DELETEを使うために必要です。



/************ APIs *************************/
app.get('/', post.index);
app.get('/posts/:id([0-9]+)', post.show);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id/edit', post.edit);
// app.post('/posts/:id', post.update);     // putが使えない。。
app.put('/posts/:id', post.update);     // putが使えない。。
app.delete('/posts/:id', post.destroy);  // delete が使えない。。。


app.listen(3000);
console.log("server starting...");