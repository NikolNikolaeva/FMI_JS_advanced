var sum = function (x, y) {
  return x + y;
};

function memoize(sum) {
  var sumMemorizer = {};

  return function memSum(a, b) {
    let key =
      a <= b ? a.toString() + b.toString() : b.toString() + a.toString();
    if (!sumMemorizer.hasOwnProperty(key)) {
      sumMemorizer[key] = sum.apply(this,arguments);
    }
    return sumMemorizer[key];
  };
}

var memSum = memoize(sum);

console.log(memSum(2, 3)); // пресмята, връща 5
console.log(memSum(3, 3)); // пресмята, връща 6
console.log(memSum(2, 3)); // директно връща 5 без да смята
