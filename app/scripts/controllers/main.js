'use strict';

define([ 'angular' ], function() {

  var main = angular.module('main', ['firebase']);

  main.controller('MainCtrl', function($scope) {
	  $scope.tester = 'acker';
	});
  
	
});