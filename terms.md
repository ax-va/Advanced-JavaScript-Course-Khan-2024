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

**stack overflow = an error that is thrown when the call stack gets filled up to its limit and can no longer hold more entries**

An example of the *stack overflow* error would be an error with infinite recursion of a function:

```javascript
function foo() {
    foo();
}
```

The call stack has a fixed size and can contain a limited number of entries.

However, the ECMAScript specification does not define whether JavaScript primitives and objects 
are stored on the stack or the heap. It depends on the JavaScript engine implementation.
The rule of *"primitives go on the stack and objects on the heap"* is a misconception.