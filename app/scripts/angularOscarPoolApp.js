'use strict';

define([
	'angular',
	'angularResource',
	'angularRoute',
	'angularCookies',
	'angularMocks',
	'angularTranslate',
	'aopTranslate',
  'stringFilter',
	'firebase',
	'firebaseSimpleLogin',
	'angularFire',
	'lodash',
	'main',
	'listNominees',
	'selectNominees',
	'viewMySelections'
],
	function() {
	
		var aop = angular.module('angularOscarPoolApp', [
			'ngRoute',
			'firebase',
			'StringFiltersModule',
			'aop.translate',
			'main',
			'aop.listNominees',
			'aop.selectNominees',
			'aop.viewMySelections'
		]);
		
		
    //////////////////////////////
    // Route Configuration for Angular Activity Tracker
    //
    // - $routeProvider: Allows for configuration of routes
    // - $locationProvider: Allows for configuration of routing strategy
    //////////////////////////////
	  aop.config(function ($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'views/main.html',
	        controller: 'MainCtrl'
	      })
	      .when('/list-nominees', {
	        templateUrl: 'views/list-nominees.html',
	        controller: 'getNomineesCtrl'
	      })
	      .when('/select-nominees', {
	        templateUrl: 'views/select-nominees.html',
	        controller: 'selectNomineesCtrl'
	      })
	      .when('/view-my-selections', {
	        templateUrl: 'views/view-my-selections.html',
	        controller: 'viewMySelectionsCtrl'
	      })
	      .otherwise({
	        redirectTo: '/'
	      });
	  });
    //////////////////////////////
    // Factory for site configuration
    //////////////////////////////
    aop.factory('siteConfig', function ($http, $aopTranslate) {
    
			var recordOptions = [
			  { id: 'yesno', name: 'Yes/No' },
			  { id: 'number', name: 'Number times' },
			  { id: 'minutes', name: 'Minutes' }
			];
			
			return {
        getRecordOptions: function() {
          return recordOptions;
        }
       
      };
			
		});
	  aop.service('myAuthService', ['$rootScope','fbURL', function($rootScope, fbURL) {
			var chatRef = new Firebase(fbURL);
			var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
			  if (error) {
			    // an error occurred while attempting login
			    console.log(error);
			  } else if (user) {
			    // user authenticated with Firebase
			    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
			  } else {
			    // user is logged out
			  }
			});
		}]);

		aop.factory('Projects', function($firebase, Firebase, fbURL) {
		  return $firebase(new Firebase(fbURL));
		});
	  
	  // Firebase database
	  aop.value('fbURL', 'https://oscars-pool.firebaseio.com');
	  
	  // Nominees JSON file
	  aop.value('nomineesJSON', 'data/2014-oscar-nominees.json');

		aop.factory('getNomineesData',function($http, $q, nomineesJSON){
			return{
				apiPath: nomineesJSON,
				getAllNominees: function(){
					//Creating a deferred object
					var deferred = $q.defer();
					
					//Calling Web API to fetch shopping cart items
					$http.get(this.apiPath).success(function(data){
					  //Passing data to deferred's resolve function on successful completion
					  deferred.resolve(data);
					}).error(function(){
						//Sending a friendly error message in case of failure
						deferred.reject("An error occured while fetching items");
					});
					
					//Returning the promise object
					return deferred.promise;
			  }
			}
		});
		
  
		aop.factory('Ballots', function($firebase, Firebase, fbURL) {
		  return $firebase(new Firebase(fbURL));
		});
		
		aop.factory('repeatOptions', function() {
		  return [
		      { id: 'yesno', name: 'Yes/No' },
		      { id: 'number', name: 'Number times' },
		      { id: 'minutes', name: 'Minutes' }
		    ];
		});

	});