var express = require('express'),
    app = express(),
    logger = require('morgan');


/************ テンプレートエンジンの設定 ********************/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/************ middleware ********************/
/* ログ出力 */
app.use(logger('dev'));


/************ APIs *************************/
/* 
  http://localhost:3000/
  views/index.ejs を呼び出すメソッドです。
*/
app.get('/', function(req, res) {
    // {title: 'title'} でejsファイルに値を渡すことができます。
    res.render('index', {title: 'title'});
});

app.listen(3000);
console.log("server starting...");