'use strict';
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');


const router = require('./router');
const db = require('./models/index.js');

const PORT = 3000;

app.use(serve('./static'));
app.use(bodyParser());
app.use(router.routes());

(async function bootstrap() {
    await db.sequelize.sync();
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})();