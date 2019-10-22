'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneDetailController($routeParams, Phone, $location) {
        var self = this;      
        self.phone = Phone.get({phoneId: $routeParams.phoneId}, 
          function(phone) {
            self.setImage(phone.images[0]);
          },
          function(){   
            //cambiar de URL         
            console.warn('No encontrado movil ' + $routeParams.phoneId );
            $location.url('/404');
                        
          });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };
      }
    ]
  });
