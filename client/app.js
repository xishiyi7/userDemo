/**
 * Created by xishiyi7 on 2015/11/17.
 */

angular.module('myApp', ['ngResource'])
	.controller('DemoUserCtrl', function ($scope, $resource,demoRest,demoFilter) {

	                /*demoRest.get(function (result){
		                $scope.name = result.name;
		                $scope.password = result.password;
		                console.log(result.name);
	                });*/
	                demoFilter.get({ID:'1'},{name:$scope.name,password:$scope.password},function (result){
		               console.log('ID=1:'+result.name);
	                });

		            $scope.add = function () {
			            demoRest.add({name:$scope.name,password:$scope.password}, function (result) {
				            console.log('add');
			            });
		            };

	            })
	// 全局常量
	.constant('GLOBAL_ARG', {
		          serverAddress: 'http://127.0.0.1:8888/rest/'
	          })
	 // 可以用ID来过滤
	.factory('demoFilter',function(demoResourceFactory){
	            return demoResourceFactory('user/:id',{id:'@ID'});
             })
	// rest服务
	.factory('demoRest',function(demoResourceFactory){
		         return demoResourceFactory('user');
	         })
	// resource封装
	.provider('demoResourceFactory', function (GLOBAL_ARG) {

		          var defaultActions = this.defaultActions = {
			          add   : {method: 'POST'},
			          edit  : {method: 'PUT'},
			          get   : {method: 'get'},
			          delete: {method: 'delete'}
		          }

		          this.$get = function ($resource) {
			          return function (url, paramsDefault) {
				          var args = [GLOBAL_ARG.serverAddress + url, paramsDefault, defaultActions];
				          return $resource.apply(this, args);
			          }
		          }
	          });
