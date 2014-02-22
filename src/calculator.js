(function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['lodash'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('lodash'));
	} else {
		root.returnExports = factory(root.lodash);
	}
}(this, function (_) {
	'use strict';
	var Calculator = function () {};
	Calculator.prototype = (function () {
		function multiply(a, b) {
			if (!_.isNumber(a) || !_.isNumber(b)) {
				throw new Error('multiple parameters must be numbers.');
			}
			return a * b;
		}
		return {
			multiply: multiply
		};
	}());
	return Calculator;
}));