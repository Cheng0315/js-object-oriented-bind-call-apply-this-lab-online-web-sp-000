//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args);
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args);
}

function returnNewFunctionOf(fn, thisValue) {
  const newFn = fn.bind(thisValue);
  return newFn;
}
