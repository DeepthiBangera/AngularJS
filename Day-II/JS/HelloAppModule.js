// Angular App on this page 
// Included CustomFilterModule as dependency
//

var HelloAppModule=angular.module('HelloAppModule', [ 'CustomFilterModule'])
    .controller('HelloCtrl', ['$scope','$filter',function($scope,$filter){
										//$scope.myName ='srinivasa reddy' ;
    	$scope.myName =$filter('initCap')('srinivasa reddy');
    									}
    						 ]
    			);

HelloAppModule.controller('NumberController', function($scope){
	  $scope.example1 = 1;
	  $scope.example2 = 2;
	  $scope.example3 = 3;
	  $scope.example4 = 4;
	  $scope.example5 = 777;
	  $scope.example6 = 1901;
	  $scope.example7 = 0;
	  $scope.example8 = 'Seven'
	});

HelloAppModule.controller('StaticLanguageController', function($scope,$filter){
	  $scope.example1 = [
	    {name: 'C#', type : 'static'},
	    {name: 'PHP', type : 'dynamic'},
	    {name: $filter('uppercase')('Go'), type : 'static'},
	    {name: $filter('initCap')('java script'), type: 'dynamic'},
	    {name: $filter('uppercase')('Rust'), type: 'static'}
	  ]
	});

