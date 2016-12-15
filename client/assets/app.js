// create app
var friendApp = angular.module('friendApp', ['ngRoute']);

friendApp.config(function ($routeProvider) {
	console.log('routes loaded');
	$routeProvider
	.when('/', {
		templateUrl: '/partials/index.html',
		controller: 'indexController'
	})
	.when('/new', {
		templateUrl: '/partials/new.html',
		controller: 'newController'
	})
	.when('/edit/:id', {
		templateUrl: '/partials/edit.html',
		controller: 'editController'
	})
	.when('/show/:id', {
		templateUrl: '/partials/show.html',
		controller: 'showController'
	})
	.when('/delete/:id', {
		templateUrl: '/partials/delete.html',
		controller: 'deleteController' 
	})
});