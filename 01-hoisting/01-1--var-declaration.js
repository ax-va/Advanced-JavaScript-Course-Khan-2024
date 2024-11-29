// The access to undeclared variables is possible
// because of the parsing step before the code is executed.
console.log(result);
// undefined
var result = 5 + 10;

// Some errors are detected in the preprocessing step before the code is executed
function print(obj) {
    // Make error
    console.log(obj;
}
// SyntaxError: missing ) after argument list

