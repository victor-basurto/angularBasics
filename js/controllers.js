// Angular Module
var artistControllers = angular.module('artistControllers', ['ngAnimate']);

/**
 * Artist Controller
 */
artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
	/**
	 * This might not work on Chrome, because of the protocol
	 * disable chrome protocols to accept http request from 
	 * external files without request these files from server.
	 * Or you can use a different web browser
	 */
	$http.get('./js/data.json').success(function(data) {
		// return this data.
		$scope.artists = data;
		$scope.artistOrder = 'name';
	});	
}]);


/**
 * Details Controller
 */
artistControllers.controller('DetailsController', 
	['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
	
	$http.get('./js/data.json').success(function(data) {
		// return this data.
		$scope.artists = data;
		$scope.whichItem = $routeParams.itemId;

		// Previous Item
		if ( $routeParams.itemId > 0 ) {		// if this is not the first item in the array
			$scope.prevItem = Number( $routeParams.itemId ) - 1;	// go back one item
		} else {								// if it is the first item
			$scope.prevItem = $scope.artists.length - 1;			// go back one item
		}

		// Next Item
		if ( $routeParams.itemId < $scope.artists.length - 1 ) { 	// as long this is not the last item in the array
			$scope.nextItem = Number( $routeParams.itemId ) + 1; 	// go forward one item
		} else {
			$scope.nextItem = 0; 	// to set it as the first item in the array 
		}
	});	
}]);
