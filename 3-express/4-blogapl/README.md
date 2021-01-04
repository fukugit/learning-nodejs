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
| Method | API                             | 実行結果                          | 概要                 |
| ------ | ------------------------------- | ----------------------------- | ------------------ |
|        | http://localhost:3000/hello/0          | hello tom                   |  app.paramで名前を取得します。                  |
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
以下のミドルウェアを用意します。  
```javascript
app.use(express.methodOverride());
```


