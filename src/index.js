// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  var types = {
    d: 10,
    h: 50,
    n: 5,
    p: 0,
    q: 25
  };
  var result = {};
  var maxNum = 10000;

  function isType(currencyType) {
    return (1 <= currency / currencyType);
  }

  function getAmount(currencyType) {
    return Math.floor(currency / currencyType);
  }

  function decreaseCurrencyBy(currencyType) {
    return currency % currencyType;
  }

  if (currency > maxNum) {

    return  { error: "You are rich, my friend! We don\'t have so much coins for exchange" };

  } else {

    if (isType(types.h)) {
      result.H = getAmount(types.h);
      currency = decreaseCurrencyBy(types.h);
    }
    
    if (isType(types.q)) {
      result.Q = getAmount(types.q);
      currency = decreaseCurrencyBy(types.q);
    }
    
    if (isType(types.d)) {
      result.D = getAmount(types.d);
      currency = decreaseCurrencyBy(types.d);
    }

    if (isType(types.n)) {
      result.N = getAmount(types.n);
      currency = decreaseCurrencyBy(types.n);
    }
    
    if (isType(types.p)) {
      result.P = currency;
    }
      
    return result;
  }
  // Return an object containing the minimum number of coins needed to make change
}
