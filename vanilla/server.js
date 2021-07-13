const liveServer = require("live-server");

const params = {
    port: 8080,
    host: "127.0.0.1",
    root: "./src",
    open: false,
    // ignore: 'scss,svg',
    file: "index.html",
    wait: 1000,
    // mount: [['/components', './node_modules']],
    logLevel: 2,
    // middleware: [function (req, res, next) { next(); }]
};

liveServer.start(params);
