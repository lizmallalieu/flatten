# flatten

My implementation of the flatten function lives inside flatten.js (with pseudocode to explain the algorithm) and the test suite with a few test cases can be run by running specRunner.html locally in the browser.

I took a functional approach to this problem using JavaScript so the code would be reusable, reliable, and easy to understand. My function is stateless meaning that it has no knowledge of past executions and does not rely on any outside variables to run, and it is immutable meaning that it creates a new output array instead of modifying the input array.

Downsides to this approach stem from the fact that it is a recursive solution, and although more robust and able to handle virtually any number of deeply nested arrays, it may not be the most efficient in terms of time and space since several calls can accrue in the call stack if there are a lot of deeply nested arrays and it does create a result array in memory.

I decided to go with this approach despite its possible downsides because I wanted something that would work in many cases (and would easily handle the case of null values) and still run relatively efficiently.