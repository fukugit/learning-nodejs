/* 
  サーバを起動して、「hello world !!!」と返却します。
  ポート番号、ドメインは外部ファイルに切り出しています。

  実行方法: 
    1: node ./2-settingfile/index.js
    2: ブラウザから http://localhost:1337/ へアクセス
  終了方法:
    1: ctrl + C
 */
var http = require('http');
var settings = require('./settings'); // 独自jsファイルの場合は、'./'が必要です。
var settings = require('./settings');
console.log(settings);

var server = http.createServer();
server.on('request', function(req, res) {
    // レスポンスは、200で返却します。
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // レスポンス Bodyです。
    res.write('hello world !!!');
    res.end();
});

// 起動時のポートとドメイン設定です。
server.listen(settings.port, settings.host);
console.log("server listening ...");