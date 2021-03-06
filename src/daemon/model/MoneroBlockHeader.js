const MoneroDaemonModel = require("./MoneroDaemonModel");

/**
 * Monero block header information.
 */
class MoneroBlockHeader extends MoneroDaemonModel {
  
  getSize() {
    return this.size;
  }
  
  setSize(size) {
    this.size = size;
  }
  
  getDepth() {
    return this.depth;
  }
  
  setDepth(depth) {
    this.depth = depth;
  }
  
  getDifficulty() {
    return this.difficulty;
  }
  
  setDifficulty(difficulty) {
    this.difficulty = difficulty;
  }
  
  getCumulativeDifficulty() {
    return this.cumulativeDifficulty;
  }
  
  setCumulativeDifficulty(cumulativeDifficulty) {
    this.cumulativeDifficulty = cumulativeDifficulty;
  }
  
  getId() {
    return this.id;
  }
  
  setId(id) {
    this.id = id;
  }
  
  getHeight() {
    return this.height;
  }
  
  setHeight(height) {
    this.height = height;
  }
  
  getMajorVersion() {
    return this.majorVersion;
  }
  
  setMajorVersion(majorVersion) {
    this.majorVersion = majorVersion;
  }
  
  getMinorVersion() {
    return this.minorVersion;
  }
  
  setMinorVersion(minorVersion) {
    this.minorVersion = minorVersion;
  }
  
  getNonce() {
    return this.nonce;
  }
  
  setNonce(nonce) {
    this.nonce = nonce;
  }
  
  getTxCount() {
    return this.txCount;
  }
  
  setTxCount(txCount) {
    this.txCount = txCount;
  }
  
  getOrphanStatus() {
    return this.orphanStatus;
  }
  
  setOrphanStatus(orphanStatus) {
    this.orphanStatus = orphanStatus;
  }
  
  getPrevId() {
    return this.prevId;
  }
  
  setPrevId(prevId) {
    this.prevId = prevId;
  }
  
  getReward() {
    return this.reward;
  }
  
  setReward(reward) {
    this.reward = reward;
  }
  
  getTimestamp() {
    return this.timestamp;
  }
  
  setTimestamp(timestamp) {
    this.timestamp = timestamp;
  }
  
  getBlockWeight() {
    return this.blockWeight;
  }
  
  setBlockWeight(blockWeight) {
    this.blockWeight = blockWeight;
  }
  
  getPowHash() {
    return this.powHash;
  }
  
  setPowHash(powHash) {
    this.powHash = powHash;
  }
}

module.exports = MoneroBlockHeader;