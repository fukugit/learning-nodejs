/* 
  Form値を受け取る仕組みを作ります。  
  HTMLの値はejs（テンプレートエンジン）を使用します。こちらはnpmで管理されているモジュールです。

  実行方法: 
    1: cd ./6-reserve-formvalue
    2: npm ci
    3: node index.js 
    4: ブラウザからにアクセスします。
    http://localhost:1337
  終了方法:
    1: ctrl + C
 */

/* 
  httpはサーバ立ち上げ、
  fsは外出しされたHTMLの読み込み
  ejsはHTMLテンプレートエンジンです。
*/
var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs'),
    qs = require('querystring'); // Form値を受け取るためのライブラリです。

var server = http.createServer();
var template = fs.readFileSync(__dirname + '/public_html/bbs.ejs', 'utf-8');

var posts = [];
/* postsをクライアントサイドに返却する関数です。 */
function renderForm(posts, res) {
  var data = ejs.render(template, {
      posts: posts
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();
}
server.on('request', function(req, res) {
  if (req.method === 'POST') {
    req.data = "";
    /* Formから送られたデータを req.dataに詰め込みます。 */
    req.on("readable", function() {
        req.data += req.read();
    });
    /* Formから送られたデータが取得し終わった時の処理は end で定義できます。 */
    req.on("end", function() {
      var query = qs.parse(req.data);
      posts.push(query.name);
      renderForm(posts, res);
    });
  } else {
    renderForm(posts, res);
  }
});

// 起動時のポートとドメイン設定です。
server.listen(1337, 'localhost');
console.log("server listening ...");