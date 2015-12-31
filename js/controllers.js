var myNameSpace = angular.module('myApp', []);

myNameSpace.controller('MyController', ['$scope', '$http', function($scope, $http) {
	// this is the model
	$http.get('./js/data.json').success(function(data) {
		$scope.artist = data;
		$scope.artistOrder = 'name';
	});	
}]);
