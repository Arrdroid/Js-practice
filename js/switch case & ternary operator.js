// Here's another option, the switch case example:
switch (a) {
    case 2:
    // do something
    break;
    case 10:
    // do another thing
    break;
    case 42:
    // do yet another thing
    break;
    default:
    // fallback to here
   }
// The break is important if you want only the statement(s) in one case to run. If you omit break from a case, and that case matches or runs, execution will continue with the next case's statements regardless of that case matching. This so called '' fall through '' is sometimes useful/desired: 
switch (a) {
    case 2:
    case 10:
    // some cool stuff
    break;
    case 42:
    // other stuff
    break;
    default:
    // fallback
   }
// Here, if a is either 2 or 10, it will execute the   ''some cool stuff '' codestatements.
   
// Another form of conditional in JavaScript is the ''conditional operator'' often called the ''ternary operator.'' It's like a more concise form of a single if..else statement, such as: 

var a = 42;
var b = (a > 41) ? "hello" : "world";

// similar to:
// if (a > 41) {
// b = "hello";
// }
// else {
// b = "world";
// }

// If the test expression (a > 41 here) evaluates as true, the first clause ("hello") results; otherwise, the second clause ("world") results, and whatever the result is then gets assigned to b. The conditional operator doesn't have to be used in an assignment, but that's definitely the most common usage.
