'use strict';


define([ 'angular' ], function() {

  var listNominees = angular.module('aop.listNominees', []);
  
  listNominees.directive('nomineesList', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/nominees-list.html'
      };
  });
	
	listNominees.controller('getNomineesCtrl', function($scope,$http){
		$scope.test = 'testing';
		$http.get('data/2014-oscar-nominees.json')
		.success(function(data){
  		console.log('win');
  		$scope.categories = data.categories;
		})
		.error(function(data){
  		console.log('lost');
		});
	});
	
});