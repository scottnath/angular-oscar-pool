'use strict';


define([ 'angular' ], function() {

  var viewMySelections = angular.module('aop.viewMySelections', []);
  
	viewMySelections.controller('viewMySelectionsCtrl', function($scope,$http,getNomineesData,Ballots){
		
		getNomineesData.getAllNominees().then(function(data){
      $scope.categories = data.categories;
  		console.log('got categories');
    },
    function(errorMessage){
      $scope.error=errorMessage;
  		console.log('failed getting categories');
    });
		$scope.ballots = Ballots;
		$scope.myballot = $scope.ballots[0];
	});
	
});
