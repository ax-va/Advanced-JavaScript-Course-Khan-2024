**AST (Abstract Syntax Tree) =  a set of objects that represent the structure of the source code**

**Global execution context**

The *global execution context* is the base context created whenever JavaScript code is loaded for execution.
The global context contains the global variables, functions, etc., 
also the value of `this`, and a reference to the outer environment (that is `null`).

**Function execution context**

Every time a JavaScript function is called, a new *function execution context* is created.
The function execution context contains variables and functions that are declared inside the function, 
the value of `this` inside the function for the current function call, 
a reference to the outer environment, and also arguments passed to the function.

**Hoisting = variables and functions can be accessed *before* their actual declaration**

**ECMAScript**

JavaScript is standardized as ECMAScript by the *Ecma International* standards organization.
Within Ecma International, the *Technical Committee 39* (TC39) is responsible for developing the JavaScript language.

**Stack overflow = an error that is thrown when the stack gets filled up to its limit and can no longer hold more entries**

1. *Call stack*

An example of the *stack overflow* in the *call stack* error would be an error with infinite recursion of a function:

```javascript
function foo() {
    foo();
}
```

Because the call stack has a fixed size and can contain a limited number of entries.

2. *Stack and heap*

The ECMAScript specification does not define whether JavaScript *primitives* and *objects* 
are stored on the *stack* or the *heap*. It depends on the JavaScript engine implementation.
The rule of *"primitives go on the stack and objects on the heap"* is a misconception.