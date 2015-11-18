/**
 * Created by xishiyi7 on 2015/11/17.
 */

var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {
	session:requestHandlers.session,
	menu:requestHandlers.menu
};

server.start(router.route,handle);