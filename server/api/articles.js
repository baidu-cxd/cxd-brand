const blogs = require('./data/blogs.json');
module.exports = {
    'GET /api/blogs': async (ctx, next) => {
        ctx.rest({
            data: blogs
        });
    },
    'POST /api/blogs': async (ctx, next) => {
        const p = {
            name: ctx.request.body.name,
            price: ctx.request.body.price
        };
        products.push(p);
        ctx.response.type = 'application/json';
        ctx.response.body = p;
    }
}