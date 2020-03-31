// httpとはNode.jsが用意しているモジュールです。
var http = require('http');
// ポート番号とホスト名は別ファイルに切り出しています。
var settings = require('./settings');
var server = http.createServer();
// Requestされた時の処理はコールバック関数に定義します。
server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('hello world!!!');
    res.end();
});
// サーバを起動します。 http://localhost:1337/ 起動後は右記へアクセスすることが可能です。
// node server.js で起動できます。
server.listen(settings.port, settings.host);
console.log("server listening...");