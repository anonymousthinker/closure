const zip = function (array1, array2) {
  return array1.map(function (element, index) {
    return [element, array2[index]];
  });
};

const getLines = function (times) {
  return function (symbols) { return symbols.map((char) => 
    times.reverse().map(repeat(char))) }
}

const repeat = function (char) {
  return function (times) {
    return char.repeat(times);
  }
}

const concatenate = function ([elementOne, elementTwo]) {
  return elementOne + elementTwo;
}

const create = function (size) {
  const times = [1, 2, 3];
  const symbols = [' ', '*'];
  const lines = getLines(times)(symbols);
  const triangle1stHalf = zip(lines[0], lines[1]).map(concatenate);
  const triangle2ndHalf = [0, 1, 2].map(repeat('*')); 

  const upperDiamond = zip(triangle1stHalf, triangle2ndHalf).map(concatenate);
  const lowerDiamond = [...upperDiamond].reverse();

  console.log(upperDiamond.join("\n") + "\n" + lowerDiamond.slice(1).join("\n"));
}

create(5)

//-----------------------------better way---------------------------------------