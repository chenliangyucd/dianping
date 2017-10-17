const Koa = require('koa');
const Router = require('koa-router');
const indexRouter = require('./index/router');
const testRouter = require('./test/router');

const app = new Koa();
const router = new Router();

// 有新加入的router直接
const routers = [indexRouter, testRouter];

for (var i = 0; i < routers.length; i++) {
  app.use(routers[i].routes(), routers[i].allowedMethods());
}

app.listen(3000);