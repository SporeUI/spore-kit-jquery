var chai = window.chai;
var describe = window.describe;
var it = window.it;
var $ = window.$;

describe('jquery core', function() {

	it('should export window.jQuery', function() {
		chai.expect(window.jQuery).to.be.an('function');
		chai.expect(window.jQuery.fn).to.be.an('object');
	});

	it('should export window.$', function() {
		chai.expect($).to.be.an('function');
		chai.expect($.fn).to.be.an('object');
	});

});

describe('env fix', function() {

	it('should support es5', function() {
		chai.expect(Array.prototype.forEach).to.be.an('function');
	});

	it('should support JSON', function() {
		chai.expect(JSON.parse).to.be.an('function');
	});

});

describe('extra', function() {

	it('$.noop', function() {
		chai.expect($.noop).to.be.an('function');
	});

	it('$.fn.reflow', function() {
		chai.expect($.fn.reflow).to.be.an('function');
	});

	it('$.fn.transform', function() {
		chai.expect($.fn.transform).to.be.an('function');
	});

	it('$.fn.transform set and get', function() {
		var el = $('.demo-transform');
		el.transform('translateX', '20px');
		var transform = el.transform();
		chai.expect(transform).to.be.an('object');
		chai.expect(transform.translateX).to.equal('20px');
		chai.expect(el.transform('translateX')).to.equal('20px');
	});

	it('$.camelCase', function() {
		chai.expect($.camelCase).to.be.an('function');
		chai.expect($.camelCase('str-html-text')).to.equal('strHtmlText');
	});

	it('$.hyphenate', function() {
		chai.expect($.hyphenate).to.be.an('function');
		chai.expect($.hyphenate('strHtmlText')).to.equal('str-html-text');
	});

	it('$.getPrefix', function() {
		chai.expect($.getPrefix).to.be.an('function');
		if (/webkit/i.test(navigator.userAgent)) {
			chai.expect($.getPrefix()).to.equal('-webkit-');
		}
	});

	it('prefix free', function() {
		var el = $('.demo-prefixfree');
		el.css('locale', 'initial');
		chai.expect(el.get(0).style.cssText).to.contain('-webkit-locale');
	});

});

