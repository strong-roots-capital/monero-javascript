const assert = require("assert");
const TestUtils = require("./TestUtils");
const MoneroUtils = require("../src/utils/MoneroUtils");

let wallet1 = TestUtils.getWalletRpc();
let wallet2 = TestUtils.getWalletLocal();
describe("Test Wallets Equal", function() {
  
  // setup before tests run
  before(async function() {
    await TestUtils.initWalletRpc();
  });
  
  it("Have the same keys", async function() {
    assert.equal(await wallet1.getMnemonic(), await wallet2.getMnemonic());
    assert.equal(await wallet1.getPrimaryAddress(), await wallet2.getPrimaryAddress());
    assert.equal(await wallet1.getPrivateViewKey(), await wallet2.getPrivateViewKey());
  });
  
  it("Provide the same integrated address given a payment id", async function() {
    throw new Error("Not implemented");
  });
  
  it("Have the same accounts", async function() {
    assert.deepEqual(await wallet1.getAccounts(), await wallet2.getAccounts());
  });
  
  it("Have the same accounts and subaddresses", async function() {
    assert.deepEqual(await wallet1.getAccounts(true), await wallet2.getAccounts(true));
  });
  
  it("Have the same outputs", async function() {
    assert.deepEqual(await wallet1.getOutputs(), await wallet2.getOutputs());
  });
  
  it("Have the same wallet transactions", async function() {
    assert.deepEqual(await wallet1.getTxs(), await wallet2.getTxs());
  });
  
  it("Have the same account transactions", async function() {
    throw new Error("Not implemented");
  })
  
  it("Have the same subaddress transactions", async function() {
    throw new Error("Not implemented");
  });
});