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

/* Bracket notation is useful if you have a property name with a special characters in it, like obj["hello world!"] - such properties are often referred to as */