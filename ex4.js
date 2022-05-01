/*ex4
mostExpensive ({
"Diamond Earrings": 980,
"Gold Watch": 250,
"Pearl Necklace": 4650
}) ➞ "The most expensive one is the Pearl Necklace"
*/

function most_expensive(jewelry) {
  let value = Object.values(jewelry);
  let max = Math.max(...value);
  for (let key in jewelry)
    if (jewelry[key] === max) {
      var result = "The most expensive one is the " + jewelry[key];
    }
  return result;
}
console.log(
  most_expensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
);
