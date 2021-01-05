# ブログアプリ
expressを使ってブログアプリを作成します。  
<br>

### 実行方法
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
| Method | API                                | 画面      |
| ------ | ---------------------------------- | ------- |
| GET    | http://localhost:3000/             | ブログ一覧   |
| GET    | http://localhost:3000/posts/0      | ブログ詳細   |
| GET    | http://localhost:3000/posts/new    | ブログ登録入力 |
| POST   | http://localhost:3000/posts/create | ブログ登録   |
| GET    | http://localhost:3000/posts/0/edit | ブログ編集入力 |
| PUT    | http://localhost:3000/posts/0      | ブログ編集   |
| DELETE | http://localhost:3000/posts/0      | ブログ削除   |
<br>

### 学んだこと
#### 外出ししたファイルを読み込む方法
以下の例だと```./routes/post```配下のjsファイルをライブラリのように使用することができます。  
```javascript
var express = require('express'),
    app = express(),
    post = require('./routes/post');

```
```post```に定義された関数を使う方法です。  
```javascript
app.get('/', post.index);
app.get('/posts/new', post.new);
app.post('/posts/create', post.create);
app.get('/posts/:id', post.show);
app.get('/posts/:id/edit', post.edit);
app.put('/posts/:id', post.update);
app.delete('/posts/:id', post.destroy);
```
<br>

#### PUT, DELETEメソッドを有効にする
まず以下が必要です。使い方は以下を参考  
http://expressjs.com/en/resources/middleware/method-override.html
```
npm install method-override
```
<br>

以下のミドルウェアを用意します。  
```javascript
var express = require('express'),
    app = express(),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    post = require('./routes/post')

app.use(methodOverride());
```
<br>

送り先であるejs側では、以下のようにしてメソッドを指定します。
```
<form method="post" action="/posts/<%= id %>?_method=PUT">
```


