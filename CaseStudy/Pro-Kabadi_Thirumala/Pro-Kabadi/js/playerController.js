app.controller('playerCtrl', ['$scope', '$routeParams', 'teamService', function ($scope, $routeParams, teamService) {
    $scope.id = $routeParams.id;
    console.log($routeParams.id);
    teamService.getPlayer().then(function (data) {
        var team;
        $.each(data, function (idx, obj) {
            if (obj.teamId == $scope.id) {
                team = obj.playersList;
            }
        });
        $scope.players = team;
        console.log(team);
    });
}]);

