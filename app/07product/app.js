/**
 * 子模块入口
 * dlq
 */

var App = angular.module('product', []);

App.config(require('./router'));
App.factory('productservice', require('./service'));

App.controller('tkttype',require('./controllers/tkttype'));
// App.controller('doccreate',require('./controllers/module'));
// App.controller('doc',require('./controllers/doc'));
// App.controller('info',require('./controllers/info'));


module.exports = App;