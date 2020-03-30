/**
 * ブロッキング処理の実装です。
 * Node.jsは常にシーケンシャルに動いているため６行目のwhileで１秒待ってから次のラインが実行されます。
 */
var start = new Date().getTime();
while (new Date().getTime() < start + 1000);
console.log("１秒待ってから表示されるよ。");