'use strict';

// Register `phoneComparador` component, along with its associated controller and template
angular.
  module('phoneComparador').
  component('phoneComparador', {
    templateUrl: 'phone-comparador/phone-comparador.template.html',
    controller: ['Phone', 'compraMovil', '$scope',
      function PhoneComparadorController(Phone, compraMovil, $scope) {        

        console.trace('PhoneComparadorController');

        var self = this;

        self.filtro = {
          "atributo": "ram",         
          "min": 0,
          "max": 32000
        }

        //self.phones = Phone.query();
        self.phones = [];
        self.phone1 = undefined;
        self.phone2 = undefined;
        self.orderProp = 'age';

        Phone.getAll().then( (res)=> self.phones = res.data  );

        this.selecionar = function(phone){
          console.trace('seleccionado movil');
          self.phone2 = self.phone1;
          self.phone1 = phone;
        }
        // selecionar


        $scope.$on("eventoCompra", function(event, data){

            alert('eventoCompra en padre ' + data.telefono.id);

        });

      }
    ]
  });

  angular.module('phoneComparador').filter('filtroTelefonos', function () {
    return function( items, filtroObject){
      console.log('filtroTelefonos filtro=%o', filtroObject);

      if ( items ){

        return items.filter((telefono)=> {
          let value = telefono.storage[filtroObject.atributo];
          //console.debug("telefono=%s value=%s min%s max=%s", telefono.id, value, min, max );
          return value >= filtroObject.min && value <= filtroObject.max ;
        });

      }  

      // return items;
    }
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
    controller: ['compraMovil','$scope',
      function PhoneComparadorDetalleController(compraMovil,$scope) {        

        console.trace('PhoneComparadorDetalleController');
        var self = this;

        self.comprar = function(){
          console.trace('click boton compra %o', self.mostrar  );
          //compraMovil.setProducto(self.mostrar);
          $scope.$emit("eventoCompra", { telefono: self.mostrar });

        }

        /*
        this.$onChanges = function (changes) {
          console.debug('cambia valor %o', changes);
          self.p1 = changes.phone1.currentValue;
        };
        */



      }
    ]
  });
