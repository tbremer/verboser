var chalk = require('chalk');
var nopt = require('nopt');
var knownOpts = {
	"verbose": Boolean,
};
var shortHands = {
	"v": ["--verbose"]
};
var args = nopt(knownOpts, shortHands);

module.exports = {
	// verbose.error
	error: function (string) {
		if (args.verbose && typeof string === "string") {
			console.log(chalk.red(string));
		}
	},

	// Force verbose output if user hasn't supplied the option.
	force: function () {
		args.verbose = true;
	},

	// verbose.log
	log: function (string) {
		if (args.verbose && typeof string === "string") {
			console.log(chalk.cyan(string));
		}
	},

	// verbose.warn
	warn: function (string) {
		if (args.verbose && typeof string === "string") {
			console.log(chalk.yellow(string));
		}
	}
};
