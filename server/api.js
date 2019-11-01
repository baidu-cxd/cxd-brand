const fs = require('fs');
function addMapping(router, mapping) {
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            var path = url.substring(4);
            router.get(path, mapping[url]);
            console.log(`register URL mapping: GET ${path}`);
        } else if (url.startsWith('POST ')) {
            var path = url.substring(5);
            router.post(path, mapping[url]);
            console.log(`register URL mapping: POST ${path}`);
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}
function addApi(router) {
    var files = fs.readdirSync(__dirname + '/api');
    var js_files = files.filter((f) => {
        return f.endsWith('.js');
    });

    for (var f of js_files) {
        console.log(`process api: ${f}...`);
        let mapping = require(__dirname + '/api/' + f);
        addMapping(router, mapping);
    }
}
module.exports = function (dir) {
    let
        api_dir = dir || '/api', 
        router = require('koa-router')();
    addApi(router, api_dir);
    return router.routes();
};