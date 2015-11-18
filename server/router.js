/**
 * Created by xishiyi7 on 2015/11/17.
 */

var user = require('./models/user').user;

function route(handle,pathname,res,params,req){

	if (pathname=='user'){
		var obj = null;
		var data = '';
		user.find({},function(e,docs){
			          obj = {name:docs[0].name,password:docs[0].password};
			          data = JSON.stringify(obj);
			          res.setHeader('Access-Control-Allow-Origin', '*');
			          res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
			          res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
			          // 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
			          res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
			          res.setHeader('Access-Control-Max-Age', '3628800');
			          // 增加缓冲相关信息
			          res.setHeader('Content-Type', 'application/json;charset=utf-8');

			          res.writeHead(200,{'Content-Type':'application/json'});
			          res.write(data);
			          res.end();
		          }
		);
	}
	else{
		switch(pathname){
			case 'info/appinfo':
				res.setHeader('Access-Control-Allow-Origin', '*');
				res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
				res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
				// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
				res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
				res.setHeader('Access-Control-Max-Age', '30');
				// 增加缓冲相关信息
				res.setHeader('Content-Type', 'application/json;charset=utf-8');
				res.writeHead(200,{'Content-Type':'text/plain,charset=utf-8'});

				res.write('{"title":"demo项目"}');
				res.end();
				break;
			case 'menu':
				res.setHeader('Cache-Control', 'max-age=30');
				res.setHeader('Access-Control-Allow-Origin', '*');
				res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
				res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
				// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
				res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
				res.setHeader('Access-Control-Max-Age', '3628800');
				// 增加缓冲相关信息
				res.setHeader('Content-Type', 'application/json;charset=utf-8');
				res.writeHead(200,{'Content-Type':'application/json'});
				res.write(JSON.stringify(handle.menu));
				res.end();
				break;
			case'session':
				res.setHeader('Access-Control-Allow-Origin', '*');
				res.setHeader('Access-Control-Allow-Headers', 'authId, Origin, X-Requested-With, Content-Type, Accept');
				res.setHeader('Access-Control-Expose-Headers', 'authId, Origin, Content-Type');
				// 明确指定允许访问类型，否则浏览器在执行post和put时会不成功
				res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
				res.setHeader('Access-Control-Max-Age', '30');
				// 增加缓冲相关信息
				res.setHeader('Content-Type', 'application/json;charset=utf-8');
				res.writeHead(200,{'Content-Type':'text/plain'});
				res.write(handle.session);
				res.end();
				break;
			default :
				break;
		}
	}
}

exports.route = route;