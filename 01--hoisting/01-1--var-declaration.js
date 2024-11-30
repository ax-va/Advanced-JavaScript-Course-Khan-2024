/*
Hoisting = variables and functions can be accessed *before* their actual declaration
 */

// The access to undeclared variables is possible
// because of the parsing step before the code is executed.
// Before any scope is executed, all the variables declared
// in that scope are registered for that scope.
console.log(result);
// undefined
var result = 5 + 10;

// In general, some errors are detected in the preprocessing step before the code is executed
function print(obj) {
    // Make error
    console.log(obj;
}
// SyntaxError: missing ) after argument list

