/*
Exercise 1.1

10
12
8
3
6
3
4
19
false
4
16
6
16

*/

/*
Exercise 1.2

(5 + 4 + (2 - (3 - (6 + 4 / 5))))
/ 
(3 * (6 - 2) * (2 - 7));

*/


// Exercise 1.3

// function square (a) {
//     return a * a;
// }

// function sum_of_squares (a, b, c) {
//     if (a + b > a + c && a + b > b + c) {
//         return square(a) + square(b);
//     } else if (b + c > a + b && b + c > a + c ) {
//         return square(b) * square(c);
//     } else {
//         return square(a) * square(c);
//     }
// }

// sum_of_squares(4, 7, 2);

// Exercise 1.5

function p() { return p(); }

function test(x, y) {
    return x === 0 ? 0 : y;
}

// test(0, p())

/* 
Applicative order evalutation

test(0, p())
test(0, p())
Keeps executing the same line as the p function is recurisve with no base condition

*/

/*
Normal order evaluation

test(0, p())
0 === 0 ? 0 : p()
0

*/









