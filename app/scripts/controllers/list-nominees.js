'use strict';


define([ 'angular' ], function() {

  var listNominees = angular.module('aop.listNominees', []);
  
  listNominees.directive('nomineesList', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/nominees-list.html'
      };
  });
	
	listNominees.controller('getNomineesCtrl', function($scope,$http,getNomineesData){
		$scope.test = 'testing';
		getNomineesData.getAllNominees().then(function(data){
      $scope.categories = data.categories;
  		console.log('got categories');
    },
    function(errorMessage){
      $scope.error=errorMessage;
  		console.log('failed getting categories');
    });

	});
	
});
