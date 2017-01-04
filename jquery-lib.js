require('es5-shim');
var $ = require('jquery');
var $json3 = require('json3');

if(!window.$){
	window.$ = $;
}

if(!window.jQuery){
	window.jQuery = $;
}

if(!window.JSON){
	window.JSON = $json3;
}

require('./src/hyphenate');
require('./src/reflow');