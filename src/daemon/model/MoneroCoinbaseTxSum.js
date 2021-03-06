const MoneroDaemonModel = require("./MoneroDaemonModel");

/**
 * Model for the summation of coinbase emissions and fees.
 */
class MoneroCoinbaseTxSum extends MoneroDaemonModel {
  
  getTotalEmission() {
    return this.totalEmission;
  }
  
  setTotalEmission(totalEmission) {
    this.totalEmission = totalEmission;
  }
  
  getTotalFees() {
    return this.totalFees;
  }
  
  setTotalFees(totalFees) {
    this.totalFees = totalFees;
  }
}

module.exports = MoneroCoinbaseTxSum;