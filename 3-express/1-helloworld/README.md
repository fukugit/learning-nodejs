# 1-helloworld
一番簡単なWebAPIです。  
<br>

### 実行方法
```sh 
node ./1-helloworld/app.js
```
<br>

### API概要
| Method    | API    | 概要    |
| --- | --- | --- |
|     |  http://localhost:3000/   | hello world を表示    |
|     |  http://localhost:3000/about   | about this page! を表示    |
|     |  http://localhost:3000/users/   | hello nobody. を表示    |
|     |  http://localhost:3000/users/tom   | hello, tom を表示（tomの部分は何でもOK）    |
|     |  http://localhost:3000/items/10   | item no: 10 を表示（10は数値であれば何でもOK）    |
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