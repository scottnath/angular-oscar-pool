'use strict';


define([ 'angular' ], function() {

  var listActivities = angular.module('ata.listActivities', ['firebase']);

  listActivities.directive('activitiesTable', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/activities-table.html'
      };
  });
  
  listActivities.controller('ActivitiesCtrl', function($scope, Projects, repeatOptions, $ataTranslate, siteConfig) {
	  $scope.projects = Projects;
	  $scope.items = repeatOptions;
	});
  
	
});