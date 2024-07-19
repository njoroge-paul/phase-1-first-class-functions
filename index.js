// index.js
function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function myNamedFunction() {};
  }
  
  function returnsAnAnonymousFunction() {
    return function() {};
  }
  
  module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction,
  };