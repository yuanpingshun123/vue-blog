"use strict";

var _koa = require("koa");

var _koa2 = _interopRequireDefault(_koa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 实例化koa
var app = new _koa2.default();

//生成服务器
//引入koa
app.listen(3000, function () {
    console.log("node is ok");
});