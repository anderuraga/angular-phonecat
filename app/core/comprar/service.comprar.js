'use strict';
  core.factory('compraMovil',
    function() {

      return {
        producto: null,
        getProducto: function() {
            return this.producto;
        },
        setProducto: function(p) {
            this.producto = p;
        }

      }; //end return
    } // end function

  );