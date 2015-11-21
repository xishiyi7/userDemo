/**
 * Created by xishiyi7 on 2015/11/17.
 */

angular.module('myApp', ['ngResource'])
	.controller('DemoUserCtrl', function ($scope, $resource, demoGet, demoAdd) {

	               // filter for search/delete/edit
	               var filter = {};

		            // init
		            demoGet.get(function (result) {
			            $scope.allItem = result.data;
		            },function (){
			            console.log('get error');
		            });

		            // add
		            $scope.add = function () {
			            demoAdd.add({PARAM: $scope.name + '|' + $scope.password}, {
				            xx: 'xxx',
				            yy: 'yyy'
			            }, function (result) {
				            window.location = window.location;
			            }, function (){
				            console.log('add error');
			            });
		            };

		            // edit
		            $scope.edit = function () {
			            demoAdd.edit({PARAM: $scope.addName + '|' + $scope.addPassword}, function (result) {
				            window.location = window.location;
			            },function (){
				            console.log('edit error');
			            });
		            }

		            // delete
		            $scope.delete = function () {
			            demoAdd.delete({PARAM: $scope.delName + '|' + $scope.delPassword}, function (result) {
				            window.location = window.location;
			            },function (){
				            console.log('delete error');
			            });
		            }

	                // search
	                $scope.search = function() {
		                if ($scope.someUser){
			                angular.extend(filter,{name:$scope.someUser});
		                }
		                if ($scope.somePwd){
			                angular.extend(filter,{password:$scope.somePwd});
		                }
		                demoGet.get(filter,function(result){
			                $scope.allItem = result.data;
			                filter = {};
		                },function (){
			                console.log('search error');
			                filter = {};
		                });
	                }

	            })
	// 全局常量
	.constant('GLOBAL_ARG', {
		          serverAddress: 'http://127.0.0.1:8888/rest/'
	          })
	// rest服务:add 暂时通过参数传递数据
	.factory('demoAdd', function (demoResourceFactory) {
		         return demoResourceFactory('user/:param', {param: '@PARAM'});
	         })
	// rest服务:get
	.factory('demoGet', function (demoResourceFactory) {
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
