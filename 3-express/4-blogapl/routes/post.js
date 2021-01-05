var posts = [
  {title: 'title0', body: 'body0'},
  {title: 'title1', body: 'body1'},
  {title: 'title2', body: 'body2'}
];

/* 
  画面トップ
 */
exports.index = function(req, res) {
  res.render('posts/index', {posts: posts});
};

/* 
  ブログ詳細
 */
exports.show = function(req, res) {
  res.render('posts/show', {post: posts[req.params.id]});
};

/* 
  ブログ登録入力
 */
exports.new = function(req, res) {
  res.render('posts/new');
};

/* 
  ブログ編集入力
 */
exports.edit = function(req, res) {
  res.render('posts/edit', {post: posts[req.params.id], id: req.params.id});
};

/* 
  ブログ更新
 */
exports.update = function(req, res) {
  posts[req.body.id] = {
      title: req.body.title,
      body: req.body.body
  };
  res.redirect('/');
};

/* 
  ブログ削除
 */
exports.destroy = function(req, res) {
  posts.splice(req.body.id, 1);
  res.redirect('/');
};

/* 
  ブログ登録
 */
exports.create = function(req, res) {
  var post = {
      title: req.body.title,
      body: req.body.body
  };
  posts.push(post);
  res.redirect('/');
};