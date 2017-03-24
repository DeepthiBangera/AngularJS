app.factory('teamService', ['$http', function ($http) {

    var serviceFactory = {};
        //To get teams
        serviceFactory.getTeams = function () {
            return $http({
                method: "GET",
                url: "SampleData/TeamsData.txt",
            }).then(function mySucces(response) {
                return response.data;
            }, function myError(response) {
                alert(response.statusText);
            });
        },
        //To get team players
        serviceFactory.getPlayer = function () {
            return $http({
                method: "GET",
                url: "SampleData/Players.txt",
            }).then(function mySucces(response) {             
                return  response.data;
            }, function myError(response) {
                alert(response.statusText);
            });
        }
        return serviceFactory;
    
}]);