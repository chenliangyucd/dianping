const Router = require('koa-router');

const router = new Router();

router.get('/api/test', async (ctx, next) => {
  ctx.body = {
    username: '阿，希爸',
    age: 30
  }
});

module.exports = router;