/* An array is an object that could hold any type of value not particularly in named properties/keys, but rather in numerically indexed positions. */

const arr = [
    "hello world",
    42,
    true
];

arr[0];     // "hello world"
arr[1];     // 42
arr[2];     // true

arr.length; // 3

typeof(arr); // object

/* The best and most natural approach is to use arrays for numerically positioned values and use objects for named properties. */