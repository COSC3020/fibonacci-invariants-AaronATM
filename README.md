[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/rzkZS2Jf)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant

What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call. Your invariant must say something
about the current recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.

Previous answer:
Invariant:
- fib(0) = 0
- fib(1) = 1
- $\forall n > 2$ fib(n) = fib(n - 1) + fib(n - 2)

We can use this information to prove the function correct by inserting the values into the function such that

array = [0, 1, fib(n - 1) + fib(n - 2), fib(n - 1) + fib(n - 2), ...] = [0, 1, 1, 2, ...]

// Discussed with Jacob Johnson

Updated answer:
At the beginning of every nth recursion the values that need to be equal to the corresponding values of the fibonacci sequence are array[n - 1] and array[n - 2]. The previous answer was was not correct in this sense because the recursion does not depend on fib(0) = 0, fib(1) = 1, or any specific fib(n) explicitly.
