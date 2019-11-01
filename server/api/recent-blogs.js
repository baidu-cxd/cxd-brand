const data = require('./data/recent-blogs.json');
module.exports = {
    'GET /api/recent-blogs': async (ctx, next) => {
        ctx.rest({
            data: data
        });
    }
}