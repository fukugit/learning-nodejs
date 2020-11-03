/* 
  npmで管理されているejs（テンプレートエンジン）を使ってHTML内で変数を使います。

  実行方法: 
    1: cd ./5-npm
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
    ejs = require('ejs');

var server = http.createServer();

/* readFileSyncメソッドはノンブロッキングですが、リクエスト前に定義しているので処理全体には影響ありません。 */
var template = fs.readFileSync(__dirname + '/public_html/hello.ejs', 'utf-8');
var n = 0;

server.on('request', function(req, res) {
  n++;
  var data = ejs.render(template, {
    title: "hello",
    content: "<strong>World!</strong>",
    n: n
  });
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(data);
  res.end();

});

// 起動時のポートとドメイン設定です。
server.listen(1337, 'localhost');
console.log("server listening ...");