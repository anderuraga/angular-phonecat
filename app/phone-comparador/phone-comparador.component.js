'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone',
      function PhoneComparadorController(Phone) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.phones = Phone.query();
        self.phone1 = {};
        self.phone2 = {};
        self.orderProp = 'age';

       

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar

      }
    ]
  });

  /**
   * Detalle del Comparador
   */
  angular.
  module('phoneComparador').
  component('phoneComparadorDetalle', {
    templateUrl: 'phone-comparador/phone-comparador-detalle.template.html',
    bindings:{
      mostrar : '=',
      comparar : '='
    },
    controller: [
      function PhoneComparadorDetalleController() {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;

        //self.p1 = this.phone1;

        /*
        this.$onChanges = function (changes) {
          console.debug('cambia valor %o', changes);
          self.p1 = changes.phone1.currentValue;
        };
        */



      }
    ]
  });
