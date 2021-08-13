var express = require('express');
var router = express.Router();

router.use('/comments', require('./commentRoute.js'));
router.use('/healthz', require('./healthzRoute.js'));

module.exports = router;
