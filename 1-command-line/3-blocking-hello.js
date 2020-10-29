/**
 * ブロッキング処理の実装です。
 * Node.jsではこの書き方はアンチパターンです。
 * Node.jsは常にシーケンシャルに動いているため６行目のwhileで１秒待ってから次のラインが実行されます。
 */
console.log("----- start -----");
var start = new Date().getTime();

// 1秒停止します。
while (new Date().getTime() < start + 1000);

// 上記の処理はコールバック処理されていないので待ち（ブロック）が発生してしまいます。
console.log("１秒待ってから表示されるよ。");
console.log("----- end -----");