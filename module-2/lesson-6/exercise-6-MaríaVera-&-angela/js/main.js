'use strict';

const pearsBage = {
  pearsMin: new Number(1),
  pearsMax: new Number(10),
  pearsIn: new Number(6),
  pearsInitial: new Number(2),
  addPear: function() {
    this.pearsIn = new Number(this.pearsIn + 1); // this.pearsIn++;
  }, 
  removePear: function() {
    this.pearsIn = new Number(this.pearsIn - 1); // this.pearsIn--
  }, 
  resetPears: function() { this.pearsIn = this.pearsInitial; }
}

pearsBage.addPear();
console.log(pearsBage.pearsIn);
pearsBage.removePear();
console.log(pearsBage.pearsIn);
pearsBage.resetPears();
console.log(pearsBage.pearsIn);
