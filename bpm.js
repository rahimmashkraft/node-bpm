/**
 * Calculate BPM 
 * Main code by bahamas10 on github 
 * edits by David Gooch Gooch12013 on github
 */

 if (typeof exports !== 'undefined') {
  module.exports = BPM;
  module.exports.BPM = BPM;
}

function BPM() {
  this.count = 0;
  this.ts = 0;
  this.old_ts = 0;
}

BPM.prototype.tap = function() {
  this.ts = Date.now();
  if (!this.first_ts) this.first_ts = this.ts;

  var ret = {};

  // ignore the first tap
  if (this.old_ts) {
    var ms = this.ts - this.old_ts;
    

    //adds a reset if the user does not tap than 8 seconds apart 
    if (ms > 8000) { 
      this.count = 0;
      this.ts = 0;
      this.old_ts = 0;
      this.first_ts = 0;
    }
    
    //adds a reset if the user taps more than 16 times in a row
    if (this.count >= 16){
      this.count = 0;
      this.ts = 0;
      this.old_ts = 0;
      this.first_ts = 0;
    }

    var avg = 60000 * this.count / (this.ts - this.first_ts);
   
    ret.avg = avg
    ret.ms = ms;
    
  }

  ret.count = ++this.count;

  // Store the old timestamp
  this.old_ts = this.ts;

 
  return ret;
};

BPM.prototype.reset = function() {
  this.count = 0;
  this.ts = 0;
  this.old_ts = 0;
  this.first_ts = 0;
  
  return ret;
};

