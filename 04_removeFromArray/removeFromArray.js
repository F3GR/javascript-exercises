const removeFromArray = function(array, ...args) {
  let result = array;
  let i = 0;

  for (; i < args.length; i++) {
    result = result.filter((element) => element !== args[i]);
  }

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
