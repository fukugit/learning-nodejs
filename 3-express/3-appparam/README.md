# app.param
app.paramを使って、リクエストのIDから名前を索引する仕組みを作ります。  
<br>

### 実行方法
nodemonとは、jsの修正内容を即時反映してくれるパッケージです。
```sh 
npm install
nodemon app
```

事前に以下を実行しておきます。  
```sh
npm install nodemon -g
```
<br>

### API概要
| Method | API                             | 実行結果                          | 概要                 |
| ------ | ------------------------------- | ----------------------------- | ------------------ |
|        | http://localhost:3000/hello/0          | hello tom                   |  app.paramで名前を取得します。                  |
<br>

### 学んだこと
#### app.param
リクエストしたメソッドの前処理として、app.paramが動作します。  
JavaでいうところのFilterのような処理です。  
このapp.paramでは、リクエストで受け取ったIDから名前を索引しています。本来はDB値などを取得するような使い方をします。  
```javascript
app.param('id', function(req, res, next, id) {
  var users = ['tom', 'wawa', 'hahaha'];
  req.params.name = users[id];
  next();
});

```
<br>


