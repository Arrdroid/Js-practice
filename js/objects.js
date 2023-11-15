/* The object type refers to a compound value where you can set properties (named locations) that each hold their own value of any type. */

let obj = {
    a: "hello world",
    b: 42,
    c: true
};

// Calling up a properties of an object

// dot notation

obj.a // "hello world"
obj.b // 42
obj.c // true

// bracket notation

obj["a"]; //"hello world"
obj["b"]; //42
obj["c"]; // true

/* Bracket notation is useful if you have a property name with a special characters in it, like obj["hello world!"] - such properties are often referred to as keys when accessed via bracket notation. The [ ] notation requires either a variable or a string (which needs to be wrappe in ".." or '..').   */

/* Also bracket notation is useful if you want to access a property/key but the name is stored in another variable, such as: */


let newObj = {
    a: "hello world",
    b: 42
};

let b = "a";

obj[b]; // "hello world"
obj["a"] // 42
