
var PrefixFree;

var $ = window.jQuery;

var camelCase = $.camelCase;

var hyphenate = $.hyphenate;

(function(root, undefined){

	if(!$){return;}

	if(!window.getComputedStyle) {return;}

	var getComputedStyle = window.getComputedStyle;

	var self = {
		prefixProperty: function(property, bCamelCase) {
			var prefixed = self.prefix + property;
			return bCamelCase ? camelCase(prefixed) : prefixed;
		}
	};

	PrefixFree = self;

	(function() {
		var i, property,
			prefixes = {},
			highest = { prefix: '', uses: 0},
			properties = [],
			shorthands = {},
			style = getComputedStyle(document.documentElement, null),
			dummy = document.createElement('div').style;

		// Why are we doing this instead of iterating over properties in a .style object? Cause Webkit won't iterate over those.
		var iterate = function(property) {
			pushUnique(properties, property);

			if(property.indexOf('-') > -1) {
				var parts = property.split('-');

				if(property.charAt(0) === '-') {
					var prefix = parts[1],
						uses = ++prefixes[prefix] || 1;

					prefixes[prefix] = uses;

					if(highest.uses < uses) {
						highest = {prefix: prefix, uses: uses};
					}

					// This helps determining shorthands
					while(parts.length > 3) {
						parts.pop();

						var shorthand = parts.join('-'),
							shorthandDOM = camelCase(shorthand);

						if(shorthandDOM in dummy) {
							pushUnique(properties, shorthand);
						}
					}
				}
			}
		};

		// Some browsers have numerical indices for the properties, some don't
		if(style.length > 0) {
			for(i = 0; i < style.length; i++) {
				iterate(style[i]);
			}
		}
		else {
			for(property in style) {
				iterate(hyphenate(property));
			}
		}

		self.prefix = '-' + highest.prefix + '-';
		self.Prefix = camelCase(self.prefix);

		properties.sort();

		self.properties = [];

		// Get properties ONLY supported with a prefix
		for(i=0; i<properties.length; i++){
			property = properties[i];

			if(property.charAt(0) !== '-') {
				break; // it's sorted, so once we get to the first unprefixed property, we're done
			}

			if(property.indexOf(self.prefix) === 0) { // we might have multiple prefixes, like Opera
				var unprefixed = property.slice(self.prefix.length);

				if(!(camelCase(unprefixed) in dummy)) {
					self.properties.push(unprefixed);
				}
			}
		}

		// IE fix
		if(self.Prefix == 'Ms' &&
			!('transform' in dummy) &&
			!('MsTransform' in dummy) &&
			('msTransform' in dummy)
		){
			self.properties.push('transform', 'transform-origin');
		}

		self.properties.sort();
	})();

	// Add class for current prefix
	root.className += ' ' + self.prefix;

	function pushUnique(arr, val) {
		if(arr.indexOf(val) === -1) {
			arr.push(val);
		}
	}

})(document.documentElement);

(function($){

	if(!$){return;}
	if(!PrefixFree){return;}

	$.getPrefix = function(){
		return PrefixFree.prefix;
	};

})(window.jQuery);

