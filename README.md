# VERBOSER
Simple, predictable and chainable verbose logging for Node modules

*If you ever need a repeatable predictable way to send information to the users of your Node Package and don't want to write out a check for `--verbose` or `-v`*

## API
*Currently all assumptions are that you are sending either a `String` or `Array`. Hoping to add support for Key:Value pairs in the near future.*
**All parts of the API and be chained for high functionality**

#### .force()
Forces verbose output -- this is useful for CLI type modules where you don't want the user to have to pass `-v` or `--verbose`

#### .linebreak()
Inserts a new line wherever this function is called.

#### .log('Hello World')
Prints a cyan message to the user.

#### .warn('Hello World')
Prints a yellow message to the user.

#### .error('Hello World')
Prints a red message to the user.

## Example:
```javascript
var verbose = require('verboser');

// Sends a cyan log statement
verbose.log('Something to the user');

// Sends a yellow warning statement
verbose.warn('Something a little less scary.');

// Sends a red error statement
verbose.error('Something alarming!');

// Sends a red error with line break and then an array with yellow copy.
verbose.error('Something went wrong').linebreak().warn(array).
```
