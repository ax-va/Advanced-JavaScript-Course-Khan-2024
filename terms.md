**AST = Abstract Syntax Tree =  a set of objects that represent the structure of the source code**

**Global execution context**

The *global execution context* is the base context created whenever JavaScript code is loaded for execution.
The global context contains the global variables, functions, etc., 
also the value of `this`, and a reference to the outer environment (that is `null`).

**Function execution context**

Every time a JavaScript function is called, a new *function execution context* is created.
The function execution context contains variables and functions that are declared inside the function, 
the value of `this` inside the function for the current function call, 
a reference to the outer environment, and also arguments passed to the function.

**ECMAScript**

JavaScript is standardized as ECMAScript by the *Ecma International* standards organization.
Within Ecma International, the *Technical Committee 39* (TC39) is responsible for developing the JavaScript language.
