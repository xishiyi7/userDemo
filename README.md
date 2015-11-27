# userDemo #
## made by xishi7 ##
## on 2015/11/17 ##

### 工程启动

> 1. 安装node
> 2. 安装mongodb，并按照此文档后续部分创建数据库demo，新建表user，插入字段name、password
> 3. 使用node server/server命令启动服务器
> 4. 直接访问index.html，页面应该显示出第一个插入的行name='XXX',password='YYY'

### userDemo工程各文件说明

> 1. client文件夹 -- 客户端web应用程序
	- lib文件夹，依赖的js文件库
	- app.js，入口js文件
	- index.html，入口html文件

> 2. server文件夹 -- 服务端node应用程序
	- models文件夹，mongodb文件视图
	- index.js，入口node服务文件
	- router.js，路由控制文件
	- server.js，服务器配置文件
	- requestHandler.js，请求处理文件

> 3. node_modules文件夹 -- 服务器及客户端程序依赖的包
	- mongoose，mongodb相关
	- debug，暂时未知，需与mongoose一起添加

> 4. package.json -- 工程需要引入的包描述文件

> 5. README.md -- 工程描述文件

### mongodb数据库处理
- a. 首先开启mongodb服务并连接数据库：
	```
		cd bin 进入mongodb文件夹的bin目录
		输入mongod -dapath ../data/db 连接bin同级目录的data/db的数据库
	```
- b. 利用mongodb创建数据库demo
	```
		use demo
	```
- c. 新建表user
	```
		db.user.XXX 只要用user操作 会默认新建user表
	```
- d. 插入name、password字段
	```
		db.user.insert(
			{name:"XX",password:"YY"}
		)	// 插入的数据类似于json/object
	```
- e. 查看插入的结果
	```
		db.user.find()
	```  
	
### 附录
- a. client文件夹中的server文件的作用是可以将本地文件夹打包，类似于本地部署，然后可以直接访问index.html文件 
