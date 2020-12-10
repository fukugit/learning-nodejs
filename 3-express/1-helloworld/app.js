var express = require('express'),
    app = express();

// Express 4.x系では以下のコードは不要になります
// app.use(app.router);

app.get('/', function(req, res) {
    res.send('hello world');
});
app.get('/about', function(req, res) {
    res.send('about this page!');
});

/* 
  プレースホルダー を使ったAPIです。
  以下のどちらでもアクセス可能です
  http://localhost:3000/users/tom
  http://localhost:3000/users/
*/
app.get('/users/:name?', function(req, res) {
    if (req.params.name) {
      res.send('hello, ' + req.params.name);
    } else {
        res.send('hello nobody.');
    }
});

/* 
  プレースホルダーで正規表現を使う
  以下でアクセス可能です
  http://localhost:3000/items/100
  以下だとエラーになります。
  http://localhost:3000/items/aaa
*/
app.get('/items/:id([0-9]+)', function(req, res) {
    res.send('item no: ' + req.params.id);
});

app.listen(3000);
console.log("server starting...");