const cycle = function (count) {
  const oldCount = count;
  return function (limit) {
    count++;
    if (count > limit) {
      count = oldCount;
    }
    return count;
  }
}

const names = ['gour', 'againGour', 'gourNew', 'gourTwo'];
const bikes = ['s1krr', 'h2r', 'panigale', 'cbr1krr', 'r1m'];
let index = 0;
names[cycle(index)(names.length)] + '->' + bikes[cycle(index)(bikes.length)];
