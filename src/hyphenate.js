var $ = window.jQuery;

/**
驼峰转连字符
@example
console.info(
	$.hyphenate('strDivText')
);
//str-div-text
**/
$.hyphenate = function(str){
	return str.replace(/[A-Z]/g, function($0){
		return '-' + $0.toLowerCase();
	});
};
