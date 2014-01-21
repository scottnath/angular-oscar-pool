'use strict';

define([ 'angular' ], function() {
    var translate = angular.module('aop.translate', [ 'pascalprecht.translate' ]);
    translate.service('translationMap', function() {
        return {
            ACTIVITIY_NAME_TITLE: 'Activity',
            ACTIVITIY_JUDGEMENT_TITLE: 'Judgement',
            ACTIVITIY_RECORDING_TITLE: 'Record By',
            ACTIVITIY_STARTDATE_TITLE: 'Start Date'
        };
    });
    translate.provider('$aopTranslate', function($translateProvider) {
        this.$get = function(translationMap) {
            $translateProvider.translations(translationMap);
            $translateProvider.preferredLanguage('en');
        };
    });
});