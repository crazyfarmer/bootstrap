angular.module('ui.bootstrap.xwidget',[])
.directive('xxWidgetBody', rdWidgetBody)
.directive('xxWidgetFooter', rdWidgetFooter)
.directive('xxWidgetHeader', rdWidgetTitle)
.directive('xxWidget', rdWidget);

function rdWidget() {
 var directive = {
     transclude: true,
     template: '<div class="widget" ng-transclude></div>',
     restrict: 'EA'
 };
 return directive;

 function link(scope, element, attrs) {
     /* */
 }
}
function rdWidgetTitle() {
var directive = {
    requires: '^rdWidget',
    scope: {
        title: '@',
        icon: '@'
    },
    transclude: true,
    template: '<div class="widget-header"><div class="row"><div class="pull-left"><i class="fa" ng-class="icon"></i> {{title}} </div><div class="pull-right col-xs-6 col-sm-4" ng-transclude></div></div></div>',
    restrict: 'E'
};
return directive;
}
function rdWidgetFooter() {
var directive = {
    requires: '^rdWidget',
    transclude: true,
    template: '<div class="widget-footer" ng-transclude></div>',
    restrict: 'E'
};
return directive;
}
function rdWidgetBody() {
var directive = {
    requires: '^rdWidget',
    scope: {
        loading: '@?',
        classes: '@?'
    },
    transclude: true,
    template: '<div class="widget-body" ng-class="classes"><rd-loading ng-show="loading"></rd-loading><div ng-hide="loading" class="widget-content" ng-transclude></div></div>',
    restrict: 'E'
};
return directive;
}


//   .directive('xWidget', xWidget)
//   .directive('xWidgetHeader', xWidgetTitle)
//   .directive('xWidgetBody', xWidgetBody)
//   .directive('xWidgetFooter', xWidgetFooter);
//
// function xWidgetFooter() {
//   var directive = {
//     requires: '^xWidget',
//     transclude: true,
//     template: '<div class="widget-footer" ng-transclude></div>',
//     restrict: 'E'
//   };
//   return directive;
// }
//
// function xWidgetBody() {
//   var directive = {
//     requires: '^xWidget',
//     scope: {
//       loading: '@?',
//       classes: '@?'
//     },
//     transclude: true,
//     template: '\
//     <div class="widget-body" ng-class="classes">\
//     <loading ng-show="loading"></loading>\
//     <div ng-hide="loading" class="widget-content" ng-transclude>\
//     </div></div>',
//     restrict: 'E'
//   };
//   return directive;
// }
//
// function xWidgetTitle() {
//   var directive = {
//     requires: '^xWidget',
//     scope: {
//       title: '@',
//       icon: '@'
//     },
//     transclude: true,
//     template: '\
//       <div class="widget-header">\
//       <div class="row">\
//       <div class="pull-left">\
//       <i class="fa" ng-class="icon"></i> {{title}} \
//       </div>\
//       <div class="pull-right col-xs-6 col-sm-4" ng-transclude>\
//       </div></div></div>',
//     restrict: 'E'
//   };
//   return directive;
// }
//
// function xWidget() {
//   var directive = {
//     transclude: true,
//     template: '<div class="widget" ng-transclude></div>',
//     restrict: 'EA'
//   };
//   return directive;
//
//   function link(scope, element, attrs) {
//     /* */
//   }
// }
