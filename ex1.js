/* ex1 
Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ( "m" for male,
"f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
● If the number is negative, return the related ancestor.
● If positive, return the related descendant.
● You are generation 0 . In the case of 0 (male or female), return "me!" .
Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
*/

let generation = {
  1: { m: "great grand father", f: "great grand mother" },
  2: { m: "grand father", f: "grand mother" },
  3: { m: "father", f: "mother" },
  0: { m: "me!", f: "me!" },
  "-1": { m: "son", f: "daughter" },
  "-2": { m: "grand son", f: "grand daughter" },
  "-3": { m: "great grand son", f: "great grand daughter" },
};
function Generation(x, y) {
  let X = x.toString();
  return generation[X][y];
}
console.log(Generation(-1, "m"));
