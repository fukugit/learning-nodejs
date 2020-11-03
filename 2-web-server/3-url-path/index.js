/* 
  サーバを起動して、リクエストのパス毎にメッセージを変えてと返却します。

  実行方法: 
    1: node ./3-url-path/index.js 
    2: ブラウザから以下のいずれかにアクセスします。リクエストによって表示されるメッセージが変わります。
    http://localhost:1337/about
    http://localhost:1337/profile
    http://localhost:1337/aaa
  終了方法:
    1: ctrl + C
 */
var http = require('http');
var server = http.createServer();

server.on('request', function(req, res) {
  console.log('リクエストPath：' + req.url);

  switch (req.url) {
    case '/about':
        msg = "About me";
        break;
    case '/profile':
        msg = "Profile page";
        break;
    default:
        msg = 'Request is wrong.';
        break;
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write(msg);
  res.end();
});

// 起動時のポートとドメイン設定です。
server.listen(1337, 'localhost');
console.log("server listening ...");