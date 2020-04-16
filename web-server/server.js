// httpとはNode.jsが用意しているHTTPを扱うためのモジュールです。
// fsとはNode.jsが用意しているファイル読み込みのモジュールです。
var http = require('http'),
    fs = require('fs'),
    ejs = require('ejs');
// ポート番号とホスト名は別ファイルに切り出しています。
var settings = require('./settings');
var server = http.createServer();
// npmライブラリの ejs を使用します。
var template = fs.readFileSync(__dirname + '/public/hello.ejs', 'utf-8'); // ここはノンブロッキングな処理ですが、リクエストを受ける前なので特に問題にはなりません。
var msg;
var n = 0;
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

    n++;
    var data = ejs.render(template,{
        title: "hello",
        content: "<strong>World!</strong>",
        n: n
    });
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    return res.end();

    // htmlファイルを読み込みます。
    // ここの処理には入りません。 もし動かしたい場合は上記のejsを使ってレスポンスを返す処理をコメントアウトする必要があります。
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