var myApp = angular.module('myApp', [
	'ngRoute',				// ngRoute from Angular
	'artistControllers'		// set the name to the js name from the controller
]);

myApp.config(['$routeProvider',function($routeProvider) {	// config the controller
	$routeProvider
	.when('/list', {
		templateUrl: './partials/list.html',	// path to the list view
		controller: 'ListController'			// name of the controller
	})
	.when('/details/:itemId', {
		templateUrl: './partials/details.html',	// path to the details view
		controller: 'DetailsController'			// name of the controller 
	})
	.otherwise({
		redirectTo: '/list'		// by default
	});
}]);