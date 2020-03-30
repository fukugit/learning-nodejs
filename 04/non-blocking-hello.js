/**
 * ノンブロッキング処理の実装です。
 * Node.jsでは常にノンブロッキングで実装する必要があります。
 * こちらの例では９行目の処理がsetTimeoutの処理を待たずに実行されます。
 */
setTimeout(function(){
  console.log("1秒待つよ。");
}, 1000);
console.log("ここが先に表示されるよ。");