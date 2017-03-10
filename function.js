var exported = {
  function1: function (x, y){
    var num = 0;
    num = x * y;
    return num;
  },
  function2: function (x, y){
    return "The multiplication of " + x + " and " + y + " equals: " + exported.function1(x, y)
  }
};

module.exports = exported.function2;