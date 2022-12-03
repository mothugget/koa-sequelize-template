'use strict';
const Router = require('koa-router');
const router = new Router();
const message = require('./controllers/stuffController');

router.get('/stuff', message.getStuff);
router.post('/stuff', message.postStuff);

module.exports = router;
