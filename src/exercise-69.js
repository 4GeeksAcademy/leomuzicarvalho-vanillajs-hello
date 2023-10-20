function removeStringValuesLongerThan(num, obj) {
  const copyObj = { ...obj };

  for (const key in copyObj) {
    if (isString(copyObj[key]) && copyObj[key].length > num) {
      delete copyObj[key];
    }
  }

  return copyObj;
}

function isString(string) {
  return typeof string == "string";
}

let obj = {
  name: "Montana",
  age: 20,
  location: "Texas",
  coords: "-51.14764654, 42.54879654",
};

const result = removeStringValuesLongerThan(6, obj);

console.log(result);
