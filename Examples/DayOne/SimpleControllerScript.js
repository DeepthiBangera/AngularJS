var myApp1 = angular.module('myApp',[]);

myApp1.controller ('simpleController',function($scope){
	// Initialize the model variables
  $scope.firstName = "Shailaja";
  $scope.lastName = "Patil";

  // Define utility functions
  $scope.getFullName = function ()
  {
    return $scope.firstName + " " + $scope.lastName;
  }
});


myApp1.controller("RoomCtrl", function(){
	this.openDoor = function(){
		alert("Open Door");
	}
	this.message = "Open the Door";
})

