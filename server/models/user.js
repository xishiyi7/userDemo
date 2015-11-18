/**
 * Created by xishiyi7 on 2015/11/17.
 */

var mongoose = require('mongoose');
//var db = mongoose.connect('mongodb://localhost/demo');//；连接数据库
var db = mongoose.createConnection('localhost','demo');
db.on('error',console.error.bind(console,'连接数据库出错'));
db.once('open',function(){
	console.log('open data connection');
});

/* 方法一 */

/* 创建Schema */
var userSchema = new mongoose.Schema({
								name:String,
								password:String
                            },
                            {
                                collection:'user'   // 表名
                            }
);

/* 实例方法 */
/*userSchema.methods.findsome = function(cb){
	return this.model('userModel').find({name:this.name},cb);
}*/

/* 静态方法 */
/*userSchema.statics.findbyname = function(name,cb){
	return this.find({name:name},cb);
}*/


var userModel = db.model('userModel',userSchema);    // 将Schma映射到Model

/* 实例方法eg. */
/*var test = new userModel({name:'demo'});    // 模型实例
// 调用模型上实例的公共方法
test.findsome(function(err,data){
	var a = data;
	console.log(a);
});*/

/* 静态方法eg. */
/*var classId = '';
userModel.findbyname('class2',function(err,data){
	classId = data[0]._doc._id.toString();
});*/

/* 更新操作 */
/*setTimeout(function(){
	if(classId!=''){
		userModel.findById(classId,function(err,data){
			// 更新操作方法一
			//data.name = 'class2';
			//data.save(function(err){
			//	var a = err;
			//});

			// 更新操作方法二
			userModel.update({_id:classId},{$set:{name:'class3'}},function(err){});
		})
	}
},1000*2)*/

/* 使用model来新增一条数据 */
/*var li = {name:'lisi',password:'3'};    // 只能是json对象 不能是model实体
userModel.create(li,function(err,data){
});*/

/* 使用entity来新增一条数据 */
/*var wang = new userModel({name:'wangwu',password:'4'});
wang.save(function(err,data){
});*/

/* 删除一条数据 */
/*userModel.remove({class:'english'},function(err){
	if(err){
		var a = err;
	}
});*/

/*userModel.findOne({'name':'lisi'},function(err,data){
	console.log(data._doc.password);
})*/


exports.user = userModel;