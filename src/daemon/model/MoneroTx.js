const assert = require("assert");
const BigInteger = require("../../submodules/mymonero-core-js/cryptonote_utils/biginteger").BigInteger;
const MoneroDaemonModel = require("./MoneroDaemonModel");
const MoneroUtils = require("../../utils/MoneroUtils");
const MoneroOutput = require("./MoneroOutput");

/**
 * Represents a transaction on the Monero network.

 * TODO: ensure all fields are tested
 */
class MoneroTx extends MoneroDaemonModel {
  
  /**
   * Constructs the model.
   * 
   * @param state is model state or json to initialize from (optional)
   */
  constructor(state) {
    super();
    state = Object.assign({}, state);
    this.state = state;
    
    // deserialize fee
    if (state.fee && !(state.fee instanceof BigInteger)) state.fee = BigInteger.parse(state.fee);
    
    // deserialize vouts
    if (state.vouts) {
      for (let i = 0; i < state.vouts.length; i++) {
        if (!(state.vouts[i] instanceof MoneroOutput)) {
          state.vouts[i] = new MoneroOutput(state.vouts[i]);
        }
      }
    }
  }
  
  getId() {
    return this.state.id;
  }
  
  setId(id) {
    this.state.id = id;
  }
  
  getVersion() {
    return this.state.version;
  }
  
  setVersion(version) {
    this.state.version = version;
  }
  
  getIsCoinbase() {
    return this.state.isCoinbase;
  }
  
  setIsCoinbase(coinbase) {
    this.state.isCoinbase = coinbase;
  }
  
  getPaymentId() {
    return this.state.paymentId;
  }
  
  setPaymentId(paymentId) {
    this.state.paymentId = paymentId;
  }
  
  getFee() {
    return this.state.fee;
  }
  
  setFee(fee) {
    this.state.fee = fee;
  }
  
  getMixin() {
    return this.state.mixin;
  }
  
  setMixin(mixin) {
    this.state.mixin = mixin;
  }
  
  getDoNotRelay() {
    return this.state.doNotRelay;
  }
  
  setDoNotRelay(doNotRelay) {
    this.state.doNotRelay = doNotRelay;
  }
  
  getIsRelayed() {
    return this.state.isRelayed;
  }
  
  setIsRelayed(isRelayed) {
    this.state.isRelayed = isRelayed;
  }
  
  getIsConfirmed() {
    return this.state.isConfirmed;
  }
  
  setIsConfirmed(isConfirmed) {
    this.state.isConfirmed = isConfirmed;
  }
  
  getInTxPool() {
    return this.state.inTxPool;
  }
  
  setInTxPool(inTxPool) {
    this.state.inTxPool = inTxPool;
  }
  
  getHeight() {
    return this.state.height;
  }
  
  setHeight(height) {
    this.state.height = height;
  }
  
  getConfirmationCount() {
    return this.state.confirmationCount;
  }
  
  setConfirmationCount(confirmationCount) {
    this.state.confirmationCount = confirmationCount;
  }
  
  getBlockTimestamp() {
    return this.state.blockTimestamp;
  }
  
  setBlockTimestamp(blockTimestamp) {
    this.state.blockTimestamp = blockTimestamp;
  }
  
  getEstimatedBlockCountUntilConfirmed() {
    return this.state.estimatedBlockCountUntilConfirmed;
  }
  
  setEstimatedBlockCountUntilConfirmed(estimatedBlockCountUntilConfirmed) {
    this.state.estimatedBlockCountUntilConfirmed = estimatedBlockCountUntilConfirmed;
  }
  
  getUnlockTime() {
    return this.state.unlockTime;
  }
  
  setUnlockTime(unlockTime) {
    this.state.unlockTime = unlockTime;
  }
  
  getLastRelayedTime() {
    return this.state.lastRelayedTime;
  }
  
  setLastRelayedTime(lastRelayedTime) {
    this.state.lastRelayedTime = lastRelayedTime;
  }
  
  getReceivedTime() {
    return this.state.receivedTime;
  }
  
  setReceivedTime(receivedTime) {
    this.state.receivedTime = receivedTime;
  }
  
  getIsDoubleSpend() {
    return this.state.isDoubleSpend;
  }
  
  setIsDoubleSpend(isDoubleSpend) {
    this.state.isDoubleSpend = isDoubleSpend;
  }
  
  getKey() {
    return this.state.key;
  }
  
  setKey(key) {
    this.state.key = key;
  }
  
  getHex() {
    return this.state.hex;
  }
  
  setHex(hex) {
    this.state.hex = hex;
  }
  
  getSize() {
    return this.state.size;
  }
  
  setSize(size) {
    this.state.size = size;
  }
  
  getWeight() {
    return this.state.weight;
  }
  
  setWeight(weight) {
    this.state.weight = weight;
  }
  
  getVins() {
    return this.state.vins;
  }
  
  setVins(vins) {
    this.state.vins = vins;
  }
  
  getVouts() {
    return this.state.vouts;
  }
  
  setVouts(vouts) {
    this.state.vouts = vouts;
  }
  
  // TODO: integrate with vin/vout
  getOutputIndices() {
    return this.state.outputIndices;
  }
  
  setOutputIndices(outputIndices) {
    this.state.outputIndices = outputIndices;
  }
  
  getMetadata() {
    return this.state.metadata;
  }
  
  setMetadata(metadata) {
    this.state.metadata = metadata;
  }
  
  getCommonTxSets() {
    return this.state.commonTxSets;
  }
  
  setCommonTxSets(commonTxSets) {
    this.state.commonTxSets = commonTxSets;
  }
  
  getExtra() {
    return this.state.extra;
  }
  
  setExtra(extra) {
    this.state.extra = extra;
  }

  getRctSignatures() {
    return this.state.rctSignatures;
  }
  
  setRctSignatures(rctSignatures) {
    this.state.rctSignatures = rctSignatures;
  }
  
  getRctSigPrunable() {
    return this.state.rctSigPrunable;
  }
  
  setRctSigPrunable(rctSigPrunable) {
    this.state.rctSigPrunable = rctSigPrunable;
  }
  
  getKeptByBlock() {
    return  this.state.keptByBlock;
  }
  
  setKeptByBlock(keptByBlock) {
    this.state.keptByBlock = keptByBlock;
  }
  
  getIsFailed() {
    return this.state.isFailed;
  }
  
  setIsFailed(isFailed) {
    this.state.isFailed = isFailed;
  }
  
  getLastFailedHeight() {
    return this.state.lastFailedHeight;
  }
  
  setLastFailedHeight(lastFailedHeight) {
    this.state.lastFailedHeight = lastFailedHeight;
  }
  
  getLastFailedId() {
    return this.state.lastFailedId;
  }
  
  setLastFailedId(lastFailedId) {
    this.state.lastFailedId = lastFailedId;
  }
  
  getMaxUsedBlockHeight() {
    return this.state.maxUsedBlockHeight;
  }
  
  setMaxUsedBlockHeight(maxUsedBlockHeight) {
    this.state.maxUsedBlockHeight = maxUsedBlockHeight;
  }
  
  getMaxUsedBlockId() {
    return this.state.maxUsedBlockId;
  }
  
  setMaxUsedBlockId(maxUsedBlockId) {
    this.state.maxUsedBlockId = maxUsedBlockId;
  }
  
  getSignatures() {
    return this.state.signatures;
  }
  
  setSignatures(signatures) {
    this.state.signatures = signatures;
  }
  
  copy() {
    return new MoneroTx(this.toJson());
  }
  
  // TODO: may need to deep copy getOutputIndices(), getCommonTxSets(), getRctSignatures(), etc depending on their final type
  toJson() {
    let json = Object.assign({}, this.state);
    if (this.getFee()) json.fee = this.getFee().toString();
    if (this.getVouts()) {  // TODO: test/support vins
      json.vouts = [];
      for (let vout of this.getVouts()) json.vouts.push(vout.toJson());
    }
    return json;
  }
  
  toString(indent = 0) {
    let str = "";
    str += MoneroUtils.kvLine("==== Tx ID: ", this.getId(), indent);
    str += MoneroUtils.kvLine("Version", this.getVersion(), indent);
    str += MoneroUtils.kvLine("Is coinbase", this.getIsCoinbase(), indent);
    str += MoneroUtils.kvLine("Payment ID", this.getPaymentId(), indent);
    str += MoneroUtils.kvLine("Fee", this.getFee(), indent);
    str += MoneroUtils.kvLine("Mixin", this.getMixin(), indent);
    str += MoneroUtils.kvLine("Do not relay", this.getDoNotRelay(), indent);
    str += MoneroUtils.kvLine("Is relayed", this.getIsRelayed(), indent);
    str += MoneroUtils.kvLine("Is confirmed", this.getIsConfirmed(), indent);
    str += MoneroUtils.kvLine("In tx pool", this.getInTxPool(), indent);
    str += MoneroUtils.kvLine("Height", this.getHeight(), indent);
    str += MoneroUtils.kvLine("Confirmation count", this.getConfirmationCount(), indent);
    str += MoneroUtils.kvLine("Block timestamp", this.getBlockTimestamp(), indent);
    str += MoneroUtils.kvLine("Estimated block count until confirmed", this.getEstimatedBlockCountUntilConfirmed(), indent);
    str += MoneroUtils.kvLine("Unlock time", this.getUnlockTime(), indent);
    str += MoneroUtils.kvLine("Last relayed time", this.getLastRelayedTime(), indent);
    str += MoneroUtils.kvLine("Received time", this.getReceivedTime(), indent);
    str += MoneroUtils.kvLine("Is double spend", this.getIsDoubleSpend(), indent);
    str += MoneroUtils.kvLine("Key", this.getKey(), indent);
    str += MoneroUtils.kvLine("Hex", this.getHex(), indent);
    str += MoneroUtils.kvLine("Size", this.getSize(), indent);
    str += MoneroUtils.kvLine("Weight", this.getWeight(), indent);
    str += MoneroUtils.kvLine("Vins", this.getVins(), indent);  // TODO: test/support like vouts
    str += MoneroUtils.kvLine("Metadata", this.getMetadata(), indent);
    str += MoneroUtils.kvLine("Common tx sets", this.getCommonTxSets(), indent);
    str += MoneroUtils.kvLine("Extra", this.getExtra(), indent);
    str += MoneroUtils.kvLine("RCT signatures", this.getRctSignatures(), indent);
    str += MoneroUtils.kvLine("RCT sig prunable", this.getRctSigPrunable(), indent);
    str += MoneroUtils.kvLine("Kept by block", this.getKeptByBlock(), indent);
    str += MoneroUtils.kvLine("Is failed", this.getIsFailed(), indent);
    str += MoneroUtils.kvLine("Last failed height", this.getLastFailedHeight(), indent);
    str += MoneroUtils.kvLine("Last failed id", this.getLastFailedId(), indent);
    str += MoneroUtils.kvLine("Max used block height", this.getMaxUsedBlockHeight(), indent);
    str += MoneroUtils.kvLine("Max used block id", this.getMaxUsedBlockId(), indent);
    str += MoneroUtils.kvLine("Signatures", this.getSignatures(), indent);
    if (this.getVouts()) {
      str += MoneroUtils.kvLine("Vouts", "", indent);
      for (let i = 0; i < this.getVouts().length; i++) {
        str += MoneroUtils.kvLine(i + 1, "", indent + 1);
        str += this.getVouts()[i].toString(indent + 2);
        str += '\n'
      }
    } else {
      str += MoneroUtils.kvLine("Vouts", this.getVouts(), indent);
    }
    return str.slice(0, str.length - 1);  // strip last newline
  }
  
  /**
   * Updates this transaction by merging the latest information from the given
   * transaction.
   * 
   * @param tx is the transaction to update this transaction with
   * @returns {this} for method chaining
   */
  merge(tx) {
    assert(tx instanceof MoneroTx);
    if (this === tx) return;
    this.setId(MoneroUtils.reconcile(this.getId(), tx.getId()));
    this.setVersion(MoneroUtils.reconcile(this.getVersion(), tx.getVersion()));
    this.setPaymentId(MoneroUtils.reconcile(this.getPaymentId(), tx.getPaymentId()));
    this.setFee(MoneroUtils.reconcile(this.getFee(), tx.getFee()));
    this.setMixin(MoneroUtils.reconcile(this.getMixin(), tx.getMixin()));
    this.setIsConfirmed(MoneroUtils.reconcile(this.getIsConfirmed(), tx.getIsConfirmed(), {resolveTrue: true}));
    this.setDoNotRelay(MoneroUtils.reconcile(this.getDoNotRelay(), tx.getDoNotRelay(), {resolveTrue: false}));  // tx can become relayed
    this.setIsRelayed(MoneroUtils.reconcile(this.getIsRelayed(), tx.getIsRelayed(), {resolveTrue: true}));      // tx can become relayed
    this.setIsDoubleSpend(MoneroUtils.reconcile(this.getIsDoubleSpend(), tx.getIsDoubleSpend()));
    this.setKey(MoneroUtils.reconcile(this.getKey(), tx.getKey()));
    this.setHex(MoneroUtils.reconcile(this.getHex(), tx.getHex()));
    this.setSize(MoneroUtils.reconcile(this.getSize(), tx.getSize()));
    this.setWeight(MoneroUtils.reconcile(this.getWeight(), tx.getWeight()));
    this.setVins(MoneroUtils.reconcile(this.getVins(), tx.getVins()));  // TODO: support like vouts
    this.setMetadata(MoneroUtils.reconcile(this.getMetadata(), tx.getMetadata()));
    this.setOutputIndices(MoneroUtils.reconcile(this.getOutputIndices(), tx.getOutputIndices()));
    this.setCommonTxSets(MoneroUtils.reconcile(this.getCommonTxSets(), tx.getCommonTxSets()));
    this.setExtra(MoneroUtils.reconcile(this.getExtra(), tx.getExtra()));
    this.setRctSignatures(MoneroUtils.reconcile(this.getRctSignatures(), tx.getRctSignatures()));
    this.setRctSigPrunable(MoneroUtils.reconcile(this.getRctSigPrunable(), tx.getRctSigPrunable()));
    this.setKeptByBlock(MoneroUtils.reconcile(this.getKeptByBlock(), tx.getKeptByBlock()));
    this.setIsFailed(MoneroUtils.reconcile(this.getIsFailed(), tx.getIsFailed()));
    this.setLastFailedHeight(MoneroUtils.reconcile(this.getLastFailedHeight(), tx.getLastFailedHeight()));
    this.setLastFailedId(MoneroUtils.reconcile(this.getLastFailedId(), tx.getLastFailedId()));
    this.setMaxUsedBlockHeight(MoneroUtils.reconcile(this.getMaxUsedBlockHeight(), tx.getMaxUsedBlockHeight()));
    this.setMaxUsedBlockId(MoneroUtils.reconcile(this.getMaxUsedBlockId(), tx.getMaxUsedBlockId()));
    this.setSignatures(MoneroUtils.reconcile(this.getSignatures(), tx.getSignatures()));
    this.setUnlockTime(MoneroUtils.reconcile(this.getUnlockTime(), tx.getUnlockTime()));
    this.setHeight(MoneroUtils.reconcile(this.getHeight(), tx.getHeight(), {resolveMax: true}));  // height can increase
    this.setBlockTimestamp(MoneroUtils.reconcile(this.getBlockTimestamp(), tx.getBlockTimestamp(), {resolveMax: true}));  // block timestamp can increase
    this.setConfirmationCount(MoneroUtils.reconcile(this.getConfirmationCount(), tx.getConfirmationCount(), {resolveMax: true})); // confirmation count can increase
    
    // merge vouts
    if (tx.getVouts()) {
      for (let merger of tx.getVouts()) {
        let merged = false;
        merger.setTx(this);
        if (!this.getVouts()) this.setVouts([]);
        for (let mergee of this.getVouts()) {
          if (mergee.getKeyImage() === merger.getKeyImage()) {
            mergee.merge(merger);
            merged = true;
            break;
          }
        }
        if (!merged) this.getVouts().push(merger);
      }
    }
    
    // handle unrelayed -> relayed -> confirmed
    if (this.getIsConfirmed()) {
      this.setInTxPool(false);
      this.setReceivedTime(undefined);
      this.setLastRelayedTime(undefined);
      this.setEstimatedBlockCountUntilConfirmed(undefined);
    } else {
      this.setInTxPool(MoneroUtils.reconcile(this.getInTxPool(), tx.getInTxPool(), {resolveTrue: true})); // unrelayed -> tx pool
      this.setReceivedTime(MoneroUtils.reconcile(this.getReceivedTime(), tx.getReceivedTime(), {resolveMax: false})); // take earliest receive time
      this.setLastRelayedTime(MoneroUtils.reconcile(this.getLastRelayedTime(), tx.getLastRelayedTime(), {resolveMax: true}));  // take latest relay time
      this.setEstimatedBlockCountUntilConfirmed(MoneroUtils.reconcile(this.getEstimatedBlockCountUntilConfirmed(), tx.getEstimatedBlockCountUntilConfirmed(), {resolveMax: false})); // take min
    }
    
    return this;  // for chaining
  }
}

// default payment id
MoneroTx.DEFAULT_PAYMENT_ID = "0000000000000000";

module.exports = MoneroTx;