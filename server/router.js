/**
 * Created by xishiyi7 on 2015/11/17.
 */

var user = require('./models/user').user;

function route(handle, pathname, res, params, req) {

	if (req.method == 'POST') {
		var data = {
			name    : params.PARAM.split('|')[0],
			password: params.PARAM.split('|')[1]
		};
		// 添加一条数据
		user.create(data, function (err, data) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
			res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
			// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
			res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			res.setHeader('Access-Control-Max-Age', '3628800');
			// 增加缓冲相关信息
			res.setHeader('Content-Type', 'application/json;charset=utf-8');
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({"data": "add a line"}));
			res.end();
		});
	}
	// 编辑一条数据
	else if (req.method == 'PUT') {
		var tmp = unescape(pathname);
		params = tmp.split('/')[1];

		var data = {
			name    : params.split('|')[0],
			password: params.split('|')[1]
		};
		user.update({name: data.name}, {$set: {password: data.password}}, function (err, data) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
			res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
			// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
			res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			res.setHeader('Access-Control-Max-Age', '3628800');
			// 增加缓冲相关信息
			res.setHeader('Content-Type', 'application/json;charset=utf-8');
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({"data": "update a line"}));
			res.end();
		});
	}
	// 删除一条数据
	else if (req.method == 'DELETE') {
		var data = {
			name    : params.PARAM.split('|')[0],
			password: params.PARAM.split('|')[1]
		};
		user.remove({name: data.name, password: data.password}, function (err, data) {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
			res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
			// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
			res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			res.setHeader('Access-Control-Max-Age', '3628800');
			// 增加缓冲相关信息
			res.setHeader('Content-Type', 'application/json;charset=utf-8');
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(JSON.stringify({"data": "delete a line"}));
			res.end();
		})
	}
	// 获取所有数据
	else {
		var obj = null;
		var data = '';
		user.find({}, function (e, docs) {
			          var result = JSON.stringify({data: docs});
			          res.setHeader('Access-Control-Allow-Origin', '*');
			          res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
			          res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
			          // 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
			          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			          res.setHeader('Access-Control-Max-Age', '3628800');
			          // 增加缓冲相关信息
			          res.setHeader('Content-Type', 'application/json;charset=utf-8');

			          res.writeHead(200, {'Content-Type': 'application/json'});
			          res.write(result);
			          res.end();
		          }
		);
	}

}

exports.route = route;