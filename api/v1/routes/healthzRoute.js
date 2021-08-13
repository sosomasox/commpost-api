var express = require('express');
var HealthzController = require('../controllers/healthzController.js');
var router = express.Router();

router.get('/', HealthzController.healthz);

module.exports = router;
