var myApp = angular.module('myApp', [
	'ngRoute',
	'artistController'
]);

myApp.config(['$routeProvider',function($routeProvider) {
	$routeProvider.
	when('/list', {
		templateUrl: '/partials/list.html',
		controller: 'ListController',
		resolve: {
			// I will cause a 1 second delay
			delay: function($q, $timeout) {
				var delay = $q.defer();
				$timeout(delay.resolve, 1000);
				return delay.promise;
			}
		}
	}).
	otherWise({
		redirectTo: '/list'
	});
}]);