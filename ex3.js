/* ex3
Write a function that creates an object with each
(key, value) pair being the (lower case, upper case) versions of a letter, respectively.
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
*/
function UpperCaseVersionOfLetters(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    obj[key] = arr[i].toUpperCase();
  }
  obj = JSON.stringify(obj);
  return obj;
}
console.log(UpperCaseVersionOfLetters(["a", "v", "y", "z"]));
