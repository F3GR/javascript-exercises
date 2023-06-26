let calculator = {
    add: function(a, b) {
      return a + b;
    },

    subtract: function(a, b) {
      return a - b;
    },

    sum: function(array) {
      return array.reduce((total, item) => { return total + item }, 0);
    },

    multiply: function (a, b) {
      return  a * b;
    },

    power: function (a, b) {
      return  a ** b;
    },

    factorial: function (a) {
      let sum = 1;
      for (let i = 1; i <= a; i++) {
        sum *= i;
      }
      return sum;
    },
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
