# 1-helloworld
一番簡単なWebAPIです。  
<br>

### 実行方法
nodemonとは、jsの修正内容を即時反映してくれるパッケージです。
```sh 
npm install
nodemon ./1-helloworld/app
```

事前に以下を実行しておきます。  
```sh
npm install nodemon -g
```
<br>

### API概要
| Method | API                             | 実行結果                          | 概要                 |
| ------ | ------------------------------- | ----------------------------- | ------------------ |
|        | http://localhost:3000/          | hello world                   |                    |
|        | http://localhost:3000/about     | about this page!              |                    |
|        | http://localhost:3000/users/    | hello nobody.                 |                    |
|        | http://localhost:3000/users/tom | hello, tom                    | tomの部分は何でもOK       |
|        | http://localhost:3000/items/10  | item no: 10                   | 10は数値であれば何でもOK     |
|        | http://localhost:3000/hello.txt | Hello form hello.txt.         | publicフォルダ内のファイル参照 |
|        | http://localhost:3000/about.txt | This is about from about.txt. | publicフォルダ内のファイル参照 |
<br>

### 学んだこと
#### 引数なしAPIの作成方法
```javascript
app.get('/', function(req, res) {
    res.send('hello world');
})
```
<br>

#### 必須引数ありAPIの作成方法
```javascript
app.get('/users/:name', function(req, res) {
    res.send('hello, ' + req.params.name);
});
```
<br>

#### 省略可引数ありAPIの作成方法
```javascript
app.get('/users/:name?', function(req, res) {
    if (req.params.name) {
      res.send('hello, ' + req.params.name);
    } else {
        res.send('hello nobody.');
    }
});
```
<br>

#### 必須引数が特定の型であるAPIの作成方法
正規表現を使います。  
```javascript
app.get('/items/:id([0-9]+)', function(req, res) {
    res.send('item no: ' + req.params.id);
})
```
<br>

#### ファイル内容を返却する方法 その1
hello.txtのファイル内容が返却されます。
```javascript
app.get('/hello.txt', function(req, res) {
  res.sendFile(__dirname + '/public/hello.txt');
});
```
<br>

#### ファイル内容を返却する方法 その2
publicフォルダ内のファイル内容が返却されます。  
リクエストするときにリクエストPathにファイル名を指定する必要があります。  
```javascript
app.use(express.static(__dirname + '/public'));
```
<br>

#### リクエストPathをログ出力する方法
ログ出力するためにはmorganパッケージをインストールする必要があります。  
```sh
npm install morgan
```
```javascript
var logger = require('morgan');
app.use(logger('dev'));
```
<br>