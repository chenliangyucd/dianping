const Router = require('koa-router');

const router = new Router();

// 首页方块形主题的mock数据
const themeRect = require('./themeRect');
router.get('/api/themeRect', async (ctx, next) => {
  ctx.body = themeRect;
});


// 首页方块形主题的mock数据
const themeLine = require('./themeLine');
router.get('/api/themeLine', async (ctx, next) => {
  ctx.body = themeLine;
});

// 首页方块形主题的mock数据
const themeList = require('./themeList');
router.get('/api/themeList', async (ctx, next) => {
  ctx.body = themeList;
});

module.exports = router;