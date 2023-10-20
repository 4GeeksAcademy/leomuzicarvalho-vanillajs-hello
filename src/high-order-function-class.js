// customMap is a HOF cause it takes another function as an arguement!
function customFilter(genericArray, callbackFunction) {
  const copyArray = [];
  for (let i = 0; i < genericArray.length; i++) {
    const predicateResult = callbackFunction(genericArray[i]);
    if (predicateResult) {
      copyArray.push(genericArray[i]);
    }
  }
  return copyArray;
}

const myArray = ["1", "2", "3", "4", "2", "2", "2", "2", "0", "2", "42", "432"];

// value = 1 and 1 !== 2 so this is false
// value = 2 and 2 === 2 so this is true
// the function will stop, and return the INDEX of the element
const predicate = (value) => value.includes("2");

const res = myArray.filter(predicate); // equivalent "findAll"

console.log(res);
