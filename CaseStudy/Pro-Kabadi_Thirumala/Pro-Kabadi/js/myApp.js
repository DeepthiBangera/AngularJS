var app = angular.module('myApp', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/team', {
        templateUrl: 'Team.html',
        controller: 'teamController'
    }).when('/players/:id', {
        templateUrl: 'Players.html',
        controller: 'playerCtrl'
    }).when('/customdirective', {
        templateUrl: 'CustomDirective.html',
        controller: 'teamController'
    }).otherwise({
          redirectTo: '/team'
      });    
}]);

app.directive('teamtag', function () {
    var directive = {};
    directive.restrict = 'AEC';
    directive.template = "Team Name : <b>{{teamtag.name}}</b> , Id : <b>{{teamtag.Id}}</b>";

    directive.scope = true;

    directive.compile = function (element, attributes) {
        element.css("border", "1px solid skyblue");

        var linkFunction = function ($scope, element, attributes) {
            element.html("Team Name : <b>" + attributes.name + "</b> and Id: <b>" + attributes.id + "</b><br/>");
            element.css("background-color", "skyblue");
        }
        return linkFunction;
    }

    return directive;
});

//$locationProvider.html5Mode(true);