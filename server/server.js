/**
 * Created by xishiyi7 on 2015/11/17.
 */

var http = require('http');
var url = require('url');
var query = require('querystring');

function start(route,handle){
	function onReq(req,res){

		var params = url.parse(req.url,true).query;

		if(req.url === '/favicon.ico'){
			return;
		}
		var serviceName = url.parse(req.url).pathname.split('/rest/')[1];

		route(handle,serviceName,res,params,req);

	}

	http.createServer(onReq).listen(8888);
}

exports.start = start;