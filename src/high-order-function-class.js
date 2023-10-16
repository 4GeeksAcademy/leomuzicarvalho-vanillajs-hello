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

const myArray = [1, 2, 3, 4];

const predicate = (number) => number > 2;

const evenNumbers = customFilter(myArray, predicate);

console.log(evenNumbers);
