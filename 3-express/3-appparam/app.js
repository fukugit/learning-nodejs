var express = require('express'),
    app = express(),
    logger = require('morgan');


/************ middleware ********************/
/* ログ出力 */
app.use(logger('dev'));


/************ app.paramでidから名前を索引します。 ********************/
app.param('id', function(req, res, next, id) {
  var users = ['tom', 'wawa', 'hahaha'];
  req.params.name = users[id];
  next();
});

/************ APIs *************************/
/* 
  http://localhost:3000/hello/0
  このメソッドに入る前に、app.paramに入ってidから名前を取得します。
  取得された名前は、req.params.nameで参照可能です。
*/
app.get('/hello/:id', function(req, res) {
  res.send('hello ' + req.params.name);
});

app.listen(3000);
console.log("server starting...");