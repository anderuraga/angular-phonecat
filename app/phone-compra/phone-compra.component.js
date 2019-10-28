'use strict';


angular.
  module('phoneCompra').
  component('phoneCompra', {
    templateUrl: 'phone-compra/phone-compra.template.html',
    controller: ['Phone','servicioCarrito',
      function PhoneCompraController(Phone, servicioCarrito) {
        
        console.trace('PhoneCompraController');
        
        self = this;
        self.phones = servicioCarrito.getCompras();

      } 
    ]
  });
