var app = angular.module('mainApp',[]);

app.service('random',function(){
  var num=Math.floor(Math.random()*10);
  this.generate = function(){
    return num;
  };
});
app.controller('app',function($scope,random){
   $scope.generateRandom = function(){
     $scope.randNumber = random.generate();
	 $scope.randNumber2 = random.generate();
   };
});



