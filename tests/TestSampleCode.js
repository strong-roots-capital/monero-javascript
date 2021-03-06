/**
 * Test the sample code in README.md.
 */
describe("Test Sample Code", function() {
  
  it("Can demonstrate the wallet with sample code", async function() {
    
    // imports
    const BigInteger = require("../src/submodules/mymonero-core-js/cryptonote_utils/biginteger").BigInteger;
    const MoneroWalletRpc = require("../src/wallet/MoneroWalletRpc");
    const MoneroTransfer = require("../src/wallet/model/MoneroTransfer");
    const MoneroSendConfig = require("../src/wallet/model/MoneroSendConfig");
    const MoneroDestination = require("../src/wallet/model/MoneroDestination");
    
    // create a wallet that uses a monero-wallet-rpc endpoint
    let wallet = new MoneroWalletRpc({
      uri: "http://localhost:38083",
      user: "rpc_user",
      pass: "abc123"
    });

    // get wallet balance as BigInteger
    // e.g. 533648366742
    let balance = await wallet.getBalance();
    
    // get wallet primary address
    // e.g. 59aZULsUF3YNSKGiHz4JPMfjGYkm1S4TB3sPsTr3j85HhXb9crZqGa7jJ8cA87U48kT5wzi2VzGZnN2PKojEwoyaHqtpeZh
    let primaryAddress = await wallet.getPrimaryAddress();
    
    // get address and balance of subaddress [1, 0]
    let subaddress = await wallet.getSubaddress(1, 0);
    let subaddressBalance = subaddress.getBalance();
    let subaddressAddress = subaddress.getAddress();

    // send to an address
    let sentTx = await wallet.send("74oAtjgE2dfD1bJBo4DWW3E6qXCAwUDMgNqUurnX9b2xUvDTwMwExiXDkZskg7Vct37tRGjzHRqL4gH4H3oag3YyMYJzrNp", new BigInteger(50000));

    // send to multiple addresses from subaddress 0, 1 which can be split into multiple transactions
    let sendConfig = new MoneroSendConfig();
    sendConfig.setDestinations([
      new MoneroDestination("7BV7iyk9T6kfs7cPfmn7vPZPyWRid7WEwecBkkVr8fpw9MmUgXTPtvMKXuuzqKyr2BegWMhEcGGEt5vNkmJEtgnRFUAvf29", new BigInteger(50000)),
      new MoneroDestination("78NWrWGgyZeYgckJhuxmtDMqo8Kzq5r9j1kV8BQXGq5CDnECz2KjQeBDc3KKvdMQmR6TWtfbRaedgbSGmmwr1g8N1rBMdvW", new BigInteger(50000))
    ]);
    sendConfig.setAccountIndex(0);
    sendConfig.setSubaddressIndices([1]);
    let sentTxs = await wallet.sendSplit(sendConfig);
    
    // get confirmed transactions
    for (let tx of await wallet.getTxs({isConfirmed: true})) {
      let txId = tx.getId();                 // e.g. f8b2f0baa80bf6b686ce32f99ff7bb15a0f198baf7aed478e933ee9a73c69f80
      let txFee = tx.getFee();               // e.g. 750000
      let isConfirmed = tx.getIsConfirmed(); // e.g. false
    }
    
    // get incoming transfers to account 0
    for (let transfer of await wallet.getTransfers({isIncoming: true, accountIndex: 0})) {
      let amount = transfer.getAmount();     // e.g. 752343011023
    }
  });

  it("Can demonstrate the daemon with sample code", async function() {
      
      // imports
      const MoneroDaemonRpc = require("../src/daemon/MoneroDaemonRpc");
      
      // create a daemon that uses a monero-daemon-rpc endpoint
      let daemon = new MoneroDaemonRpc({uri: "http://localhost:38081"});
      
      // get daemon info
      let height = await daemon.getHeight();           // e.g. 1523651
      let feeEstimate = await daemon.getFeeEstimate(); // e.g. 750000
      
      // get first 100 blocks as a binary request
      let blocks = await daemon.getBlocksByRange(0, 100);
      
      // get block info
      for (let block of blocks) {
        let blockHeight = block.getHeader().getHeight();
        let blockId = block.getHeader().getId();
        let blockSize = block.getHeader().getSize();
        let txCount = block.getTxs().length;
      }
    });
});