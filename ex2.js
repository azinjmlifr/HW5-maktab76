/*ex2
Create the
function that takes an array with objects and returns the sum of people's budgets.
*/
getBudgets = [
  { name: "John", age: 21, budget: 29000 },
  { name: "Steve", age: 32, budget: 32000 },
  { name: "Martin", age: 16, budget: 1600 },
];
let arr = [getBudgets[0].budget, getBudgets[1].budget, getBudgets[2].budget];
let result = arr.reduce(fun1, 0);
function fun1(sum, current) {
  sum += current;
  return sum;
}
console.log(result);
