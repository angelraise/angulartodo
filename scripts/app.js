angular.module("todoListApp", [])

 .controller('mainCtrl',function($scope){
 	$scope.helloWorld = function() {
 		console.log("hello there this is mainCtrl");
 	};
 });