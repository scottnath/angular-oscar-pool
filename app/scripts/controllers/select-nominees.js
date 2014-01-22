'use strict';


define([ 'angular' ], function() {

  var listNominees = angular.module('aop.selectNominees', []);
  
  listNominees.directive('nomineesForm', function() {
      return {
          restrict: 'E',
          templateUrl: '/views/partials/nominees-form.html'
      };
  });
	
	listNominees.controller('selectNomineesCtrl', function($scope,$http,getNomineesData){

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
        console.log($scope.selectedChoices);
    };
	});
	
});