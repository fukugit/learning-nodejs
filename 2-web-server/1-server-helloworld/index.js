/* 
  サーバを起動して、「hello world !!!」と返却します。
  実行方法: 
    1: node ./1-server-helloworld/index.js
    2: ブラウザから http://localhost:1337/ へアクセス
  終了方法:
    1: ctrl + C
 */
var http = require('http');
var server = http.createServer();
server.on('request', function(req, res) {
    // レスポンスは、200で返却します。
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // レスポンス Bodyです。
    res.write('hello world !!!');
    res.end();
});

// 起動時のポートとドメイン設定です。
server.listen(1337, 'localhost');
console.log("server listening ...");