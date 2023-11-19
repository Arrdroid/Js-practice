/* When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes. For example: */

function foo() {
    let a = 1;

    function bar() {
        let b = 2;

        function baz() {
            let c = 3;

            console.log ( a, b, c ); // 1 2 3
        }

        baz();
        console.log ( a, b ); // 1 2  
    }

    bar();
    console.log( a );  // 1
}

foo();

/* Notice that c is not available inside of bar(), because it's declared only inside the inner baz() scope, and that b is not available to foo() for the same reason.

If you try to access a variable's value in a scope where it's not available, you will get a ReferenceError thrown.
*/