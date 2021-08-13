var mongoose = require('mongoose');
var CommentModel = mongoose.model('CommentModel');

// ある記事の全てのコメントを取得する
exports.all_comments = function(req, res) {
    var article_id = req.query['article_id'];

    if (article_id) {
        console.log(article_id);
        CommentModel.find({ article_id: article_id }, function(err, comment) {
            if (err) {
                res.send(err);
            } else {
                res.json(comment);
            }
        });
    } else {
        CommentModel.find().then(function(err, comment) {
            if (err) {
                res.send(err);
            } else {
                res.json(comment);
            }
        });
    }
};

// 特定のコメントを取得する
exports.load_comment = function(req, res) {
    var _id = req.params.id;

    CommentModel.findById(_id, function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    });
};

// 新たしいコメントを作成する
exports.create_comment = function(req, res) {
    var new_comment = new CommentModel();

    new_comment.article_id = req.body.article_id;
    new_comment.article_url = req.body.article_url;
    new_comment.poster_name = req.body.poster_name;
    new_comment.text = req.body.text;

    new_comment.save(function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            res.json(comment);
        }
    });
}

// コメントの内容を更新する
exports.update_comment = function(req, res) {
    var _id = req.params.id;

    CommentModel.findById(_id, function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            comment.article_id = req.body.article_id;
            comment.article_url = req.body.article_url;
            comment.poster_name = req.body.poster_name;
            comment.text = req.body.text;

            if (req.body.date) {
                comment.date = req.body.date;
            }

            comment.save(function(err, comment) {
                if (err) {
                    res.send(err);
                } else {
                    res.json(comment);
                }
            });
        }
    });

}

// 特定のコメントを削除する
exports.delete_comment = function(req, res) {
    var _id = req.params.id;
    
    CommentModel.findById(_id, function(err, comment) {
        if (err) {
            res.send(err);
        } else {
            CommentModel.deleteOne({ _id: _id }).then(function() {
                if (err) {
                    res.send(err);
                } else {
                    res.json({ message: "Success!" });
                }
            });
        }
    });
}
