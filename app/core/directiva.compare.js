/**
 * Directiva personalizada 
 * 
 * <ip-compare v1="" v2=""></ip-compare>
 * 
 */
core.directive('ipCompare', 
 [ function() {

    var directiveDefinitionObject ={
      restrict:"E",
      replace : true,
      template:"<p>{{v1}} {{unidad}}<span class=\"label label-{{ (v1>=v2) ? 'success' : 'danger' }} \">{{v1-v2}}</span></p>",
      scope:{
        v1:"@",
        v2:"@",
        unidad:"@"
      }
    }
     
    return directiveDefinitionObject;
  }]);