var myApp = angular.module("myApp",[]);
myApp.controller("myController",function($scope){
  $scope.submitLogin = function(form){
    $scope.submitted=true;
    if(form.$invalid){
	  return;
	}
	alert("login form contains valid data ")
  }
})