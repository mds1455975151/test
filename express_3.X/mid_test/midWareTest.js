/**
 * Created by wyq on 2016/5/13.
 */
var express = require('express');
var app = express();
module.exports = app;
var log4js = require('log4js');
var logger = log4js.getLogger(__filename);

//中间件练习
var showReqMethod = function (req, res, next) {        //请求方式
	logger.trace('Request Type:', req.method);
	logger.debug('Request URL:', req.originalUrl);
	var ipList = req.connection.remoteAddress.split(":");
	logger.info("Request IP:", ipList[ipList.length - 1]);
	logger.warn("req.hostname: %j", req.hostname);
	logger.error("req.protocol: %j", req.protocol);
	logger.fatal("req.ip: %j", req.ip);
	logger.info("req.ips: %j", req.ips);
	next();
};

app.use(showReqMethod);       //注意注意：use中间件要在所有get，post，put，delete的前面，否则不会执行


// curl "127.0.0.1:9001/midd/test"
app.get("/test", function (req, res) {
	res.send("get success");
});

// curl "127.0.0.1:9001/midd/test" -d ""
app.post("/test", function (req, res) {
	res.send("post success");
});

// curl "127.0.0.1:9001/midd/user/123"
app.get('/user/:id', function (req, res, next) {
	console.log('ID:', req.params.id);
	next();
}, function (req, res, next) {
	res.send('User Info');
});
// 因为上边已经定义了这个url，所以这个永远不会执行
app.get('/user/:id', function (req, res, next) {
	res.end(req.params.id);
});

// curl "127.0.0.1:9001/midd/user0/123"
app.get('/user0/:id', function (req, res, next) {
	// if the user ID is 0, skip to the next route
	if (req.params.id == 0) next('route');  //当id为0时执行下边的route
	// otherwise pass the control to the next middleware function in this stack
	else next(); //
}, function (req, res, next) {
	// render a regular page
	res.send('regular');
});

// curl "127.0.0.1:9001/midd/user0/0"
app.get('/user0/:id', function (req, res, next) {
	res.send('special');
});
