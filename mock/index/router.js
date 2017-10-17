const Router = require('koa-router');

const router = new Router();

// 首页方块形主题的mock数据
const themeRect = require('./themeRect');
router.get('/api/themeRect', async (ctx, next) => {
  ctx.body = themeRect;
});

module.exports = router;