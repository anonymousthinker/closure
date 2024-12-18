a function returning another function is called a closure
but its a little different from returning a function call where a the function 
which is called returns a value and that value is returned but in closure
```
function add(x) {
	return function (y) {
		return x + y;
	}
}

function stuff(x) {
  return function (y) {
    return function () {
      return x * y;
    }
  } 
}

> const mult = stuff(8)
undefined
> mult
[Function (anonymous)]
> mult(9)
[Function (anonymous)]
> mult(9)()
72
```
```
function stuff(x, count) {
  if (count === 0) {
    return x;
  }
   return function (y) {
    x = x + y
    return function () {
      return x * y;
    }
  } 
}

> const f = stuff(8)
undefined
> f
[Function (anonymous)]
> f(2)
[Function (anonymous)]
> f(2)(6)
60
```
```
const combine = function (function1, function2) { 
	return function (...elements) {
		return [function1(...elements)].concat(function2(...elements))
	}
}

> const minMax = combine(Math.min, Math.max)
undefined
> minMax(1, 2, 3, 4, 5)
[ 1, 5 ]
```

Instead of pushing into the array everytime 
```
array.push([char, count])
return array
```
Just do
```
return [...array, [char, count]]
```