var chalk = require('chalk');
var nopt = require('nopt');
var knownOpts = {
	"verbose": Boolean,
};
var shortHands = {
	"v": ["--verbose"]
};
var args = nopt(knownOpts, shortHands);
var color;

var arrayToString = function (arr) {
	var first = 0;
	var last = arr.length - 1;
	var str;
	arr.forEach(function (cur, index) {
		if (index === first) {
			str = chalk.white('[ ');
		}

		str = str + '\'' + cur + '\'';

		if (index < last) {
			str = str + chalk.white(', \n');
		}

		if (index === last) {
			str = str + chalk.white(' ]');
		}
	});
	return str;
};

var isArray = function (arr) {
	return Array.isArray(arr);
};

module.exports = {
	// verbose.error
	error: function (string) {
		color = chalk.red;
		if (args.verbose) {
			if (typeof string === "string") {
				console.log(color(string));
			}
			if (isArray(string)) {
				console.log(color(arrayToString(string)));
			}
		}
		return this;
	},

	// Force verbose output if user hasn't supplied the option.
	force: function () {
		args.verbose = true;
		return this;
	},

	linebreak: function () {
		if (args.verbose) {
			console.log();
		}
		return this;
	},

	// verbose.log
	log: function (string) {
		color = chalk.cyan;
		if (args.verbose) {
			if (typeof string === "string") {
				console.log(color(string));
			}
			if (isArray(string)) {
				console.log(color(arrayToString(string)));
			}
		}
		return this;
	},

	// verbose.warn
	warn: function (string) {
		color = chalk.yellow;
		if (args.verbose) {
			if (typeof string === "string") {
				console.log(color(string));
			}
			if (isArray(string)) {
				console.log(color(arrayToString(string)));
			}
		}
		return this;
	}
};
