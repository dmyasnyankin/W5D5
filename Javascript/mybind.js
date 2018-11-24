
Function.prototype.myBind = function(context) {
  return () => this.call(context);
};
// bind is supposed to return a function that uses the context that was passed in.
// this = the function you called myBind on

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function() {
   console.log("Turning on " + this.name);
};

const lamp = new Lamp();


turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

console.log("1");
boundTurnOn(); // should say "Turning on a lamp"

console.log('2');
myBoundTurnOn(); // should say "Turning on a lamp"
