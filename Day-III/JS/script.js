(function(angular) {
  'use strict';
  angular.module('myApp', [])
    .controller('employeeController', ['$scope', function($scope) {
      $scope.employees= [{
        "EMPNO": "7369",
        "ENAME": "SMITH",
        "JOB": "CLERK",
        "DEPTNO": "20"
      }, {
        "EMPNO": "7499",
        "ENAME": "ALLEN",
        "JOB": "SALESMAN",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7521",
        "ENAME": "WARD",
        "JOB": "SALESMAN",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7566",
        "ENAME": "JONES",
        "JOB": "MANAGER",
        "DEPTNO": "20"
      }, {
        "EMPNO": "7654",
        "ENAME": "MARTIN",
        "JOB": "SALESMAN",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7698",
        "ENAME": "BLAKE",
        "JOB": "MANAGER",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7782",
        "ENAME": "CLARK",
        "JOB": "MANAGER",
        "DEPTNO": "10"
      }, {
        "EMPNO": "7788",
        "ENAME": "SCOTT",
        "JOB": "ANALYST",
        "DEPTNO": "20"
      }, {
        "EMPNO": "7839",
        "ENAME": "KING",
        "JOB": "PRESIDENT",
        "DEPTNO": "10"
      }, {
        "EMPNO": "7844",
        "ENAME": "TURNER",
        "JOB": "SALESMAN",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7876",
        "ENAME": "ADAMS",
        "JOB": "CLERK",
        "DEPTNO": "20"
      }, {
        "EMPNO": "7900",
        "ENAME": "JAMES",
        "JOB": "CLERK",
        "DEPTNO": "30"
      }, {
        "EMPNO": "7902",
        "ENAME": "FORD",
        "JOB": "ANALYST",
        "DEPTNO": "20"
      }, {
        "EMPNO": "7934",
        "ENAME": "MILLER",
        "JOB": "CLERK",
        "DEPTNO": "10"
      }];
      $scope.predicate = 'EMPNO';
      $scope.reverse = false;
      $scope.order = function(predicate) {
/* For the reversing of list on double clicking the button it toggle to list (ascending and descending orders */
        $scope.reverse = ($scope.predicate == predicate) ? !$scope.reverse : true;
        $scope.predicate = predicate;
      };
    }]);
})(window.angular);