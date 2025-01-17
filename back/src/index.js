"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var node_http_1 = require("node:http");
var app = (0, express_1.default)();
var server = (0, node_http_1.createServer)(app);
app.get("/", function (req, res) {
    res.send("<h1>Hello world</h1>");
});
server.listen(3000, function () {
    console.log("server running at http://localhost:3000");
});
