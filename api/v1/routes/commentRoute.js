var express = require('express');
var CommentController = require('../controllers/commentController.js');
var router = express.Router();

router.get('/', CommentController.all_comments);
router.get('/id/:id', CommentController.load_comment);
router.post('/', CommentController.create_comment);
router.put('/id/:id', CommentController.update_comment);
router.delete('/id/:id', CommentController.delete_comment);

module.exports = router;
