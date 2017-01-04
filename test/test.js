var chai = window.chai;
var describe = window.describe;
var it = window.it;
var $ = window.$;

describe('jquery core', function() {

	it('should export window.jquery', function() {
		chai.expect(window.jquery).to.be.an('function');
		chai.expect(window.jquery.fn).to.be.an('object');
	});

	it('should export window.$', function() {
		chai.expect($).to.be.an('function');
		chai.expect($.fn).to.be.an('object');
	});

});

describe('jquery module', function() {

	it('selector', function() {
		chai.expect($('.demo-selector span:last').html()).to.equal('2');
	});

	it('ajax', function() {
		chai.expect($.ajax).to.be.an('function');
	});

	it('event', function() {
		chai.expect($.fn.on).to.be.an('function');
	});

	it('form', function() {
		chai.expect($.fn.serialize).to.be.an('function');
	});

	it('fx', function() {
		chai.expect($.fn.animate).to.be.an('function');
	});

	it('touch', function() {
		chai.expect($.fn.tap).to.be.an('function');
	});

	it('detect', function() {
		chai.expect($.__detect).to.be.an('function');
	});

	it('gesture: pass in ios', function() {
		chai.expect($.fn.pinch).to.be.an('function');
	});

});

describe('jquery deprecated', function() {

	it('data: use var instead', function() {
		chai.expect($.hasData).not.to.be.an('function');
	});

	it('assets: just remove nodes', function() {
		chai.expect($.fn.remove.toString().length < 200).to.equal(true);
	});

	it('stack: end is evil', function() {
		chai.expect($.fn.end).not.to.be.an('function');
	});

	it('callbacks: use promise instead', function() {
		chai.expect($.Callbacks).not.to.be.an('function');
	});

	it('deferred: use promise instead', function() {
		chai.expect($.when).not.to.be.an('function');
	});

	it('fx_methods: use css3 instead', function() {
		chai.expect($.fn.fadeTo).not.to.be.an('function');
	});

});

describe('extra', function() {

	it('$.noop', function() {
		chai.expect($.noop).to.be.an('function');
	});

	it('$.getScript', function() {
		chai.expect($.getScript).to.be.an('function');
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
		if($.browser.webkit){
			chai.expect($.getPrefix()).to.equal('-webkit-');
		}
	});

	it('prefix free', function() {
		var el = $('.demo-prefixfree');
		el.css('locale', 'initial');
		chai.expect(el.get(0).style.cssText).to.contain('-webkit-locale');
	});

	it('$.FastClick', function() {
		chai.expect($.FastClick).to.be.an('function');
	});

});

