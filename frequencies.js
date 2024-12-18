// const countIfElementIncludes = function (char) {
//   return function (element) {
//     if (element.includes(char)) {
//       element[1] += 1;
//     }

//     return element;
//   };
// };

// const hasOccured = function (array, char) {
//   if (array.some((element) => element.includes(char))) {
//     return array.map(countIfElementIncludes(char));
//   }

//   return [...array, [char, 1]];
// };

// const getOccurences = function (string) {
//   return function () {
//     return string.split('').reduce(hasOccured, []);
//   };
// };

//-------------------------------second approach--------------------------------

const getCount = function (updatedArray, char) {
  const elementFound = updatedArray.find((function (element) {
    return element.includes(char);
  }));

  if (elementFound === undefined) {
    return [...updatedArray, [char, 1]];
  }

  elementFound[1] += 1;
  return updatedArray;
};

const getOccurences = function (value) {
  const array = Array.from(value);
  return array.reduce(getCount, []);
};

const test = function () {
  const string = [1, 2, 3, 4, 4, 5];
  const occurences = getOccurences(string);
  console.table(occurences);
};

test();