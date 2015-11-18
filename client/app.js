/**
 * Created by xishiyi7 on 2015/11/17.
 */

angular.module('myApp', [])
	.controller('DemoUserCtrl',function($scope,$http){
		            $http.get('http://127.0.0.1:8888/rest/user').success(function(data){
			            $scope.name = data.name;
			            $scope.password = data.password;
			            console.log('success');
		            }).error(function(data){
			            console.log('error');
		            })
	            });