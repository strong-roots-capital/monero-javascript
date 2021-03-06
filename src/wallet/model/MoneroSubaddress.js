const MoneroUtils = require("../../utils/MoneroUtils");

/**
 * Monero subaddress model.
 */
class MoneroSubaddress {
  
  constructor(address) {
    this.setAddress(address);
  }
  
  getAddress() {
    return this.address;
  }

  setAddress(address) {
    this.address = address;
  }
  
  // TODO: move this to subaddress.getAccount().getIndex(), rename getSubaddressIndex() to getIndex()?
  getAccountIndex() {
    return this.accountIndex;
  }

  setAccountIndex(accountIndex) {
    this.accountIndex = accountIndex;
  }

  getSubaddressIndex() {
    return this.subaddressIndex;
  }

  setSubaddressIndex(subaddressIndex) {
    this.subaddressIndex = subaddressIndex;
  }

  getLabel() {
    return this.label;
  }

  setLabel(label) {
    this.label = label;
  }

  getBalance() {
    return this.balance;
  }

  setBalance(balance) {
    this.balance = balance;
  }

  getUnlockedBalance() {
    return this.unlockedBalance;
  }

  setUnlockedBalance(unlockedBalance) {
    this.unlockedBalance = unlockedBalance;
  }

  getUnspentOutputCount() {
    return this.unspentOutputCount;
  }

  setUnspentOutputCount(unspentOutputCount) {
    this.unspentOutputCount = unspentOutputCount;
  }

  getIsUsed() {
    return this.isUsed;
  }

  setIsUsed(isUsed) {
    this.isUsed = isUsed;
  }

  toString() {
    return this.toString(0);
  }
  
  toString(indent) {
    let str = "";
    str += MoneroUtils.kvLine("Address", this.getAddress(), indent);
    str += MoneroUtils.kvLine("Account index", this.getAccountIndex(), indent);
    str += MoneroUtils.kvLine("Subaddress index", this.getSubaddressIndex(), indent);
    str += MoneroUtils.kvLine("Label", this.getLabel(), indent);
    str += MoneroUtils.kvLine("Balance", this.getBalance(), indent);
    str += MoneroUtils.kvLine("Unlocked balance", this.getUnlockedBalance(), indent);
    str += MoneroUtils.kvLine("Unspent output count", this.getUnspentOutputCount(), indent);
    str += MoneroUtils.kvLine("Is used", this.getIsUsed(), indent);
    return str.slice(0, str.length - 1);  // strip last newline
  }
}

module.exports = MoneroSubaddress;