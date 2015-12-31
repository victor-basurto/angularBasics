// Angular Module
var artistController = angular.module('artistController', []);

/**
 * Controllers Settings
 */
artistController.controller('ListController', ['$scope', '$http', function($scope, $http) {
	/**
	 * This might not work on Chrome, because of the protocol
	 * disable chrome protocols to accept http request from 
	 * external files without request these files from server.
	 * Or you can use a different web browser
	 */
	$http.get('./js/data.json').success(function(data) {
		// return this data.
		$scope.artist = data;
		$scope.artistOrder = 'name';
	});	
}]);
