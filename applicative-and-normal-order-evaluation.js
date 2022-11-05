// Type your program in here!


/*
Applicative order

f(5)
sum_of_squares(a + 1, a * 2)
sum_of_squares(6, 10)
square(6) + square(10)
(6 * 6) + (10 * 10)
36 + 100
100

*/

/*
Normal order

f(5)
sum_of_squares(a + 1, a * 2)
sum_of_squares(5 + 1, 5 * 2)
square(5 + 1) + square(5 * 2)
(5 + 1) * (5 + 1) + (5 * 2) * (5 * 2)
6 * 6 + 10 * 10
36 + 100
136

*/