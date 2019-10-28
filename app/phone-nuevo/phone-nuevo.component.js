'use strict';


angular.
  module('phoneNuevo').
  component('phoneNuevo', {
    templateUrl: 'phone-nuevo/phone-nuevo.template.html',
    controller: ['$routeParams', 'Phone', '$location',
      function PhoneNuevoController($routeParams, Phone, $location) {
   
        console.trace('PhoneNuevoController');

        var self = this;                     
        self.form = {};

        let id = $routeParams.phoneId;
        if ( id  ) {   //buscar telefono por id

          Phone.getById(id).then(
            (res)=>{
              console.debug('telefono encontrado');
              self.form = res.data;
            },
            ()=>{
              console.warn('telefono NO encontrado');
            }
          );

        }


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
