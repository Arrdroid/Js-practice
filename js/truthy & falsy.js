/* Nature of "truthy" and "falsy" values: 
When a non-boolean value is coerced to a boolean it respectively will become true or false, considering what type of value is written inside:   */

// "Falsy" values list:
"" // (empty string)
0, -0, NaN // (invalid number)
null, undefined 
false

//Any value that's not on the "falsy" list is considered "truthy". Here is "truthy" values list: 
"hello"
42
true
// [ ], [1, "2", 3]      // (arrays)
// { }, { a: 42 }        // (objects)
// function foo () {..}  // (functions)

/* It's important to remember that a non-boolean value only follows this "truthy"/"falsy" coercion if it's actually coerced to a boolean. */