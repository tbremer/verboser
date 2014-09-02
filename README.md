# VERBOSER
Simple predictable verbose logging for Node modules

*If you ever need a repeatable predictable way to send information to the users of your Node Package and don't want to write out a check for `--verbose` or `-v`*

## API
*Currently all assumptions are that you are sending a user a string. Hoping to add support for Arrays and Key:Value pairs in the near future.*

#### .log('Hello World')
Prints a cyan message to the user.

#### .warn('Hello World')
Prints a yellow message to the user.

#### .error('Hello World')
Prints a red message to the user.

## Example:
```javascript
var verbose = require('verboser');

verbose.log('Something to the user');
verbose.warn('Something a little less scary.');
verbose.error('Something alarming!');
```
