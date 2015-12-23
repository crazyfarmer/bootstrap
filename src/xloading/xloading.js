angular.module('ui.bootstrap.xloading', [])
  .directive('xLoading', xLoading);

function xLoading() {
  var directive = {
    restrict: 'AE',
    template: '<div class="x-loading"> \
                <div class="double-bounce1"></div> \
                <div class="double-bounce2"> \
               </div></div>'
  };
  return directive;
}
