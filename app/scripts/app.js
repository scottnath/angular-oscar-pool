requirejs.config({
    baseUrl: '/scripts',
    paths: {
        bower: '/bower_components',
        angular: '/bower_components/angular/angular.min',
        angularResource: '/bower_components/angular-resource/angular-resource',
        angularCookies: '/bower_components/angular-cookies/angular-cookies',
        angularRoute: '/bower_components/angular-route/angular-route',
        angularMocks: '/bower_components/angular-mocks/angular-mocks',
        angularTranslate: '/bower_components/angular-translate/angular-translate.min',
				aopTranslate: 'utils/translate',
		    stringFilter: 'filters/strings',
		    _string: '/bower_components/underscore.string/dist/underscore.string.min',
        firebase: '/bower_components/firebase/firebase',
        firebaseSimpleLogin: '/bower_components/firebase-simple-login/firebase-simple-login',
        angularFire: '/bower_components/angularfire/angularfire',
        lodash: '/bower_components/lodash/dist/lodash.compat.min',
        main: 'controllers/main',
        listNominees: 'controllers/list-nominees',
        listBallots: 'controllers/list-ballots',
        selectNominees: 'controllers/select-nominees',
        viewMySelections: 'controllers/view-my-selections'
    }
});

define([ 'angular', 'angularOscarPoolApp' ], function() {
    angular.bootstrap(document.getElementById('angularOscarPoolApp'), [ 'angularOscarPoolApp' ]);
});