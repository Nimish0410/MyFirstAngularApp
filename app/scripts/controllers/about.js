'use strict';

/**
 * @ngdoc function
 * @name angularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularAppApp
 */
angular.module('angularAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [{
        'title' : 'HTML5 Boilerplate',
        'body' : 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'
    },
    {
        'title' :'AngularJS',
        'body' : 'AngularJS is a toolset for building the framework most suited to your application development.'
    }
      
    ];
  });
