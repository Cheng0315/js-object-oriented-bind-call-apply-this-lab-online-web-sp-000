//Your code here
function justInvoke(fn) {
  return fn();
}

function setThisWithCall(fn, thisValue, args) {
  return fn.call(thisValue, args);
}
