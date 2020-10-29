# 1-command-line
```node``` コマンドで実行可能なスクリプトです。  

## このフォルダの構成  
このフォルダでは、以下のフォルダ毎に勉強で使ったソースを用意しています。  

| ファイル                                                 | 概要                  | 学んだこと                          |
| ---------------------------------------------------- | ------------------- | ------------------------------ |
| [1-hello.js](./1-hello.js)                           | hellow worldを表示します。 | おなじみのhellow world              |
| [2-non-blocking-hello.js](./2-non-blocking-hello.js) | hellow worldを表示します。 | スレッドをノンブロッキングで動かすための実装方法       |
| [3-blocking-hello.js](./3-blocking-hello.js)         | hellow worldを表示します。 | アンチパターン。スレッドをブロッキングで動かすための実装方法 |

## ローカルでの実行方法
上記のJsファイルを実行方法です。  

### 必要なアプリケーション
```Node.js```  

### 実行方法
```
node 1-hello.js
node 2-non-blocking-hello.js 
node 3-blocking-hello.js 
```
