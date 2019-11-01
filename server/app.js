const Koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const api = require('./api');
const rest = require('./rest');
const app = new Koa();
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});
app.use(rest.restify());
app.use(bodyParser());
app.use(api());
app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port http://localhost:3000');