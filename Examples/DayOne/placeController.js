function PlaceController($scope) {
	
    $scope.list = [
        { country: 'India',   city: 'New Delhi' },
        { country: 'France',  city: 'Paris' },
        { country: 'USA',     city: 'Washington DC' },
        { country: 'England', city: 'London' }
    ];
   
    $scope.addItem = function (abc,xyz) {
        $scope.list.push({ country: $scope.countryName,
                city: $scope.cityName });
    };	
	
}