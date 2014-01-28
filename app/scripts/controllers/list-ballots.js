'use strict';


define([ 'angular' ], function() {

  var listBallots = angular.module('aop.listBallots', ['firebase']);
  
  listBallots.directive('ballotsList', function() {
      return {
          restrict: 'E',
          conrtoller: 'listBallotsCtrl',
          templateUrl: '/views/partials/ballots-list.html'
      };
  });
  
  listBallots.controller('listBallotsCtrl', function($scope, Ballots, siteConfig) {
  	$scope.testering = 'FARGLE';
	  $scope.ballots = Ballots;
	});
	
});
