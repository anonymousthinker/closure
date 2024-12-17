const zip = function (array1, array2) {
  return array1.map(function (element, index) {
    return [element, array2[index]];
  });
};

const pattern = function (times) {
  return function (symbols) { return symbols.map((c) => 
    times.reverse().map((number) => 
      c.repeat(number))) }
}

const times = [1, 2, 3, 4, 5,6];
const symbols = [' ', '*'];

const lines = pattern(times)(symbols);
const firstTriangle = zip(lines[0], lines[1]).map(function ([p1, p2]) {
  return p1 + p2
});

const secondTriangle = [0, 1, 2, 3, 4, 5].map((times) => '*'.repeat(times));

const oneHalf = zip(firstTriangle, secondTriangle).map((p) => p[0] + p[1]);
const otherHalf = [...oneHalf].reverse();

console.log(oneHalf.join("\n") + "\n" + otherHalf.slice(1).join("\n"));