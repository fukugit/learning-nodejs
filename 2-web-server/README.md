# 2-web-server
Webサーバを生成します。  

## このフォルダの構成  
このフォルダでは、以下のフォルダ毎に勉強で使ったソースを用意しています。  

| フォルダ                                                  | 概要                      | 学んだこと                 |
| ----------------------------------------------------- | ----------------------- | --------------------- |
| [1-server-helloworld](./1-server-helloworld)          | hellow worldを表示します。     | とりあえず一番簡単なコード         |
| [2-settingfile](./2-settingfile)                      | hellow worldを表示します。     | ポート番号を設定ファイルへ切り出す方法。  |
| [3-url-path](./3-url-path/index.js)                   | リクエストパスによって表示内容を変えます    | リクエストパスの取得方法          |
| [4-html](./4-html/index.js)                           | HTML内容を表示します。           | HTMLファイルの外出し＆読み込み方法   |
| [5-npm](./5-npm/index.js)                             | HTMLテンプレートエンジン内容を表示します。 | npmモジュールの利用方法         |
|                                                       |                         | ejs(テンプレートエンジン)利用方法   |
| [6-reserve-formvalue](./6-reserve-formvalue/index.js) | Formの値を受け取ります。          | Form値の受け取り方法          |
|                                                       |                         | サーバサイド > HTML へ値を渡す方法 |

## ローカルでの実行方法
上記のJsファイルを実行方法です。  

### 必要なアプリケーション
```Node.js```  

### 実行方法
```sh 
node ./1-server-helloworld/index.js
## その後ブラウザで、http://localhost:1337/ へアクセスします。

node ./2-settingfile/index.js
## その後ブラウザで、http://localhost:1337/ へアクセスします。

node ./3-url-path/index.js
## ブラウザから以下のいずれかにアクセスします。リクエストによって表示されるメッセージが変わります。
##    http://localhost:1337/about
##    http://localhost:1337/profile
##    http://localhost:1337/aaa

node ./4-html/index.js 
## その後ブラウザで、http://localhost:1337/ へアクセスします。

cd ./5-npm
npm ci
node index.js 
## その後ブラウザで、http://localhost:1337/ へアクセスします。

cd ./6-reserve-formvalue
npm ci
node index.js 
## その後ブラウザで、http://localhost:1337/ へアクセスします。

```
