Array.prototype.myReduce = function(callback, initialValue=this[0]) {
  let acc = initialValue;
  for (let i = 0; i < this.length - 1; i++){
    acc += this[i];
  }
  return acc;
};

[1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
});
