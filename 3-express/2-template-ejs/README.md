# 2-template-ejs
テンプレートエンジン ejsを使ったサンプルです。  
<br>

### 実行方法
nodemonとは、jsの修正内容を即時反映してくれるパッケージです。
```sh 
npm install
nodemon ./2-template-ejs/app
```

事前に以下を実行しておきます。  
```sh
npm install nodemon -g
```
<br>

### API概要
| Method | API                             | 実行結果                          | 概要                 |
| ------ | ------------------------------- | ----------------------------- | ------------------ |
|        | http://localhost:3000/          | views/index.ejsの値                   |                    |
<br>

### 学んだこと
#### ejsテンプレートの使い方
```javascript
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    // {title: 'title'} でejsファイルに値を渡すことができます。
    res.render('index', {title: 'title'});
});
```
<br>


