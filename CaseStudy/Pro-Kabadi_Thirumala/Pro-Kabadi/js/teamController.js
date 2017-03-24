app.controller('teamController', ['$scope', 'teamService', function ($scope, teamService) {
    teamService.getTeams().then(function (d) {
        $scope.teams = d;
    });
}]);