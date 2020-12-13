var express = require('express'),
    app = express(),
    logger = require('morgan');

/* ログ出力 */
app.use(logger('dev'));

/* 
  publicフォルダのファイルの内容を返却します。
  pathにファイル名を含める必要があります。
  http://localhost:3000/about.txt
 */
app.use(express.static(__dirname + '/public'));

/* 
  http://localhost:3000/
*/
app.get('/', function(req, res) {
    res.send('hello world');
});

/* 
  http://localhost:3000/about/
*/
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

/* 
  hello.txtの内容を返却します。
  http://localhost:3000/hello.txt
 */
app.get('/hello.txt', function(req, res) {
  res.sendFile(__dirname + '/public/hello.txt');
});


app.listen(3000);
console.log("server starting...");