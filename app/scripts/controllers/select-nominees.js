'use strict';


define([ 'angular' ], function() {

  var selectNominees = angular.module('aop.selectNominees', []);
  
  selectNominees.directive('nomineesForm', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/nominees-form.html'
      };
  });
	
	selectNominees.controller('selectNomineesCtrl', function($scope,$location,$http,getNomineesData,Ballots){

		getNomineesData.getAllNominees().then(function(data){
      $scope.categories = data.categories;
  		console.log('got categories');
    },
    function(errorMessage){
      $scope.error=errorMessage;
  		console.log('failed getting categories');
    });
    
		$scope.selectedChoices = {};

    $scope.radioSelected = function(choice, question){        
        $scope.selectedChoices[question] = choice;
        console.log(question);
    }
    $scope.submitNominees = function(){
	    Ballots.$add($scope.selectedChoices, function() {
	      $timeout(function() { $location.path('/list-nominees'); });
	    });
      console.log($scope.selectedChoices);
      $location.path('/');
    };
	});
	
});