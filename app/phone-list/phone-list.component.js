'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone',
      function PhoneListController(Phone) {
        //this.phones = Phone.query();
        console.trace('PhoneListController');
        self = this;
        self.phones = {};
        
        Phone.getAll().then( 
          function successCallback(response) {
            console.trace("Success");
            self.phones = response.data;
          },
          function errorCallback(response) {
            console.warn("Error");
          }
        );
        this.orderProp = 'age';
      }
    ]
  });
