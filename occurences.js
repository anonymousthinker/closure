const countIfElementIncludes = function (char) {
  return function (element) {
    if (element.includes(char)) {
      element[1] += 1;
    }
    
    return element;
  }
}

const hasOccured = function (array, char) {
  if (array.some((element) => element.includes(char))) {
    return array.map(countIfElementIncludes(char))
  }

  array.push([char, 1])
  return array;
}

const getOccurences = function (string) {
  return function () {
    return string.split('').reduce(hasOccured, []);
  }
}

const test = function () {
  const string = 'geek';
  const occurences = getOccurences(string);
  console.table(occurences());
}

test()