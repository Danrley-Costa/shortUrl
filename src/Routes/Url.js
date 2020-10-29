'use strict';
const express = require('express');
const router = express.Router();
const controller = require('../Controllers/Url')

router.get('/', controller.get);
router.delete('/:id', controller.delete);
router.get('/:short', controller.getByShort);
router.get('/api/doc', controller.getDoc);


module.exports = router;