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

/*
Exercise 1.3
*/

function sum_of_squares (a, b, c) {
    if (a + b > a + c && a + b > b + c) {
        return a * b;
    } else if (b + c > a + b && b + c > a + c ) {
        return b * c;
    } else {
        return a * c;
    }
}

sum_of_squares(4, 5, 6);


