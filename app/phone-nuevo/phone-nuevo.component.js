'use strict';


angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneNuevoController($routeParams, Phone, $location) {
        var self = this;              
        self.phone = {}; 
        self.form = {};
        console.trace('PhoneNuevoController');


        self.guardar = function(){
          console.debug('submitar formulario %o', self.form);

          Phone.guardar(self.form).then(
            (res)=>{
              console.debug('telefono creado');
            },
            (res)=>{
              console.warn('telefono NO se pudo crear');
            }
          );


        }


      }
    ]
  });
