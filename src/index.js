// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var types = {
    p: 0,
    n: 5,
    d: 10,
    q: 25,
    h: 50
  };
  var result = {
    P: 0,
    N: 0,
    D: 0,
    Q: 0,
    H: 0
  };
  var maxNum = 10000;

  function isType(type) {
    return (1 <= currency / type);
  }

  function getAmount(type) {
    return Math.round(currency / type);
  }

  function decreaseCurrencyBy(type) {
    return currency % type;
  }

  if (currency > maxNum) {
    
    return  { error: "You are rich, my friend! We don't have so much coins for exchange" };
  
  } else {

    if (isType(types.p)) {
      result.P = currency;
    }

    if (isType(types.n)) {
      result.N = getAmount(types.n);
      currency = decreaseCurrencyBy(types.n);
    }

    if (isType(types.d)) {
      result.D = getAmount(types.d);
      currency = decreaseCurrencyBy(types.d);
    }

    if (isType(types.q)) {
      result.Q = getAmount(types.q);
      currency = decreaseCurrencyBy(types.q);
    }

    if (isType(types.h)) {
      result.H = getAmount(types.h);
      currency = decreaseCurrencyBy(types.h);
    }
    
    return result;
  }
  // Return an object containing the minimum number of coins needed to make change
}
