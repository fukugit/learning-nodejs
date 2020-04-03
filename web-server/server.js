// httpとはNode.jsが用意しているHTTPを扱うためのモジュールです。
// fsとはNode.jsが用意しているファイル読み込みのモジュールです。
var http = require('http'),
    fs = require('fs');
// ポート番号とホスト名は別ファイルに切り出しています。
var settings = require('./settings');
var server = http.createServer();
var msg;
// Requestされた時の処理はコールバック関数に定義します。
server.on('request', function(req, res) {
    // req.url でリクエストURI毎に処理が切り分けれます。
    switch (req.url) {
        case '/about':
            msg = "about this page";
            break;
        case '/profile':
            msg = "about me";
            break;
        default:
            msg = "wrong page";
            break;
    }
    console.log(msg);

    // htmlファイルを読み込みます。
    fs.readFile(__dirname + '/public/hello.html', 'utf-8', function (err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write('THML file does not exist.');
            return res.end(); 
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })

});
// サーバを起動します。 http://localhost:1337/ 起動後は右記へアクセスすることが可能です。
// node server.js で起動できます。
server.listen(settings.port, settings.host);
console.log("server listening...");