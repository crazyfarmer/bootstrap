angular.module('ui.bootstrap.xpanel', [])
.directive('xPanel', xButton);
function xButton(){
 return {
   restrict: 'E',
   transclude: true,
   scope: true,
   template: getTemplate,
 };
}
function getTemplate(element, attr){
  if (isAnchor(attr)) {
     return '<a class="x-btn" ng-transclude></a>';
   } else {
     //If buttons don't have type="button", they will submit forms automatically.
     var btnType = (typeof attr.type === 'undefined') ? 'button' : attr.type;
     return '<button class="x-btn" type="' + btnType + '" ng-transclude></button>';
   }

}

function isAnchor(attr) {
   return angular.isDefined(attr.href) || angular.isDefined(attr.ngHref) || angular.isDefined(attr.ngLink) || angular.isDefined(attr.uiSref);
 }
