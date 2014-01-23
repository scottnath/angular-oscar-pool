'use strict';

define([ 'angular' ], function() {

  var main = angular.module('main', ['firebase']);

  main.controller('MainCtrl234', function($scope, $rootScope, myAuthService) {
	  $scope.tester = 'You\'re just on the homepage, big deal';
    $scope.signin = function() {
      auth.login();
    }
    // listen for user auth events
    $rootScope.$on("login", function(event, user) {
      // do login things
      $scope.user = user;
    })
    $rootScope.$on("loginError", function(event, error) {
      // tell the user about the error
    })
    $rootScope.$on("logout", function(event) {
      // do logout things
    })
	});
	
  main.controller("MainCtrl1243", ["$scope", "$firebase", "$firebaseSimpleLogin", 'fbURL',
    function($scope, $firebase, $firebaseSimpleLogin, fbURL) {
	  	$scope.tester = 'You\'re just on the homepage, big deal'+fbURL;
	  	
      var ref = new Firebase(fbURL);
      $scope.auth = $firebaseSimpleLogin(ref);
      $scope.logintype = 'anonymous';
      console.log($scope.auth);
	    $scope.signin = function($scope) {
	      auth.login();
	    }
    }
  ]);
	main.controller("MainCtrl", ["$scope", "$firebaseSimpleLogin", 'fbURL',
	  function($scope, $firebaseSimpleLogin, fbURL) {
	    var dataRef = new Firebase(fbURL);
	    $scope.loginObj = $firebaseSimpleLogin(dataRef);
	    $scope.loginObj.$login('anonymous', {
			   email: 'my@email.com',
			   password: 'mypassword'
			}).then(function(user) {
			   console.log('Logged in as: ', user.uid);
			}, function(error) {
			   console.error('Login failed: ', error);
			});
	  }
	]);
});