/* 
  外出ししているHTMLを読み込んで返却します。

  実行方法: 
    1: node ./4-html/index.js 
    2: ブラウザからにアクセスします。
    http://localhost:1337
  終了方法:
    1: ctrl + C
 */

/* httpはサーバ立ち上げ、fsは外出しされたHTMLの読み込み用です。 */
var http = require('http'),
    fs = require('fs');

var server = http.createServer();

server.on('request', function(req, res) {
  /* 
    データの読み込みは時間がかかるので、読み込んだ後の処理はコールバック関数を渡します。
    __dirname はカレントディレクトリを指しています。
  */
  fs.readFile(__dirname + '/public_html/hello.html', 'utf-8', function(err, data){
    if(err) {
      // HTML読み込み失敗時
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('Not found!');
      res.end();
    }

    // HTML読み込み成功時
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end()
  })
});

// 起動時のポートとドメイン設定です。
server.listen(1337, 'localhost');
console.log("server listening ...");