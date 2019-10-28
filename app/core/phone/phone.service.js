'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$http',  function($http) {

     let service = {};
     let endpoint = "http://localhost:3000/phones/";

     service.getAll = function(){      
        console.trace('GET ' + endpoint);
        return $http.get(endpoint);
     }


      service.getById = function( id ){
        let url = endpoint + id;
        console.trace('GET ' + url);
        return $http.get(url);
      }

      service.guardar = function( phone ){
        let url = endpoint;
        console.trace('POST ' + url);
        return $http.post(url, phone );
      }


      return service;
    }
  ]);
