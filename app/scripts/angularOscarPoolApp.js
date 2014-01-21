'use strict';

define([
	'angular',
	'angularResource',
	'angularRoute',
	'angularCookies',
	'angularMocks',
	'angularTranslate',
	'aopTranslate',
	'firebase',
	'firebaseSimpleLogin',
	'angularFire',
	'lodash',
	'main',
	'listNominees'
],
	function() {
	
		var aop = angular.module('angularOscarPoolApp', [
			'ngRoute',
			'firebase',
			'aop.translate',
			'main',
			'aop.listNominees'
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
	        controller: 'getNomineesCtrl'
	      })
/*
	      .when('/activities', {
	        templateUrl: 'views/activities.html',
	        controller: 'ActivitiesCtrl'
	      })
	      .when('/edit/:projectId', {
	        templateUrl: 'views/edit.html',
	        controller: 'EditCtrl'
		    })
*/
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
	  
	  aop.filter('recordTypeName', function(siteConfig) {
		  return function(input) {
		    return _.filter(siteConfig.getRecordOptions(), {id: input})[0].name;
		  };
		});
  
		aop.factory('Projects', function($firebase, Firebase, fbURL) {
		  return $firebase(new Firebase(fbURL));
		});
	  
	  // Firebase database
	  aop.value('fbURL', 'https://scottnath.firebaseio.com/');
	
	
		aop.factory('repeatOptions', function() {
		  return [
		      { id: 'yesno', name: 'Yes/No' },
		      { id: 'number', name: 'Number times' },
		      { id: 'minutes', name: 'Minutes' }
		    ];
		});

	});