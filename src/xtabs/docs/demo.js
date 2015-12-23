angular.module('ui.bootstrap.demo').controller('XTabsDemoCtrl', function($scope) {
  $scope.tabs = [{
    title: 'nc',
    content: '互联网创造了新的经济形态和运行模式，正在成为经济发展的新引擎。\
    \n作为一家业界领先的管理软件与企业云服务提供商，为积极推进大型集团在互联网时代背景下的转型升级，\
    \n服务企业互联网化，用友NC6以客户为中心，帮助中国大型企业创新管理模式、引领商业变革。\
    \n将互联网、云计算、大数据、移动应用等新技术与集团企业运营管理最佳实践深度融合，\
    \n推出了可有效推进企业互联网化的解决方案，帮助企业迈向“互联网化”的新阶段。',
    logo: 'http://nc.yonyou.com/nc/images/logo.png'
  }, {
    title: 'u9',
    content: '用友U9秉承互联网基因，是全球第一款基于SOA云架构的多组织企业互联网应用平台。\
    \nU9以精细化管理、产业链协协同与社交化商业，帮助多组织企业（多事业部/多地点/多工厂/多法人）\
    \n在互联网时代实现商业模式创新、组织变革与管理升级。',
    logo: 'http://nc.yonyou.com/nc/product/images/cp2cur.jpg'
  }];
});
