'use strict';

angular.
  module('phonecatApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/phones', {
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        when('/comparador', {
          template: '<phone-comparador></phone-comparador>'
        }).
        when('/nuevo/', {
          template: '<phone-nuevo></phone-nuevo>'
        }).
        when('/editar/:phoneId', {
          template: '<phone-nuevo></phone-nuevo>'
        }).
        when('/404', {
          templateUrl: 'error.html'
        }).
        otherwise('/phones');
    }
  ]);
