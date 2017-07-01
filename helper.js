web3.eth.filter('latest', function(err, blockHash) {
  var contributingAmount = 10; // Unit: Ether, Change the value into the amount you want

  var block = web3.eth.getBlock(blockHash);
  var blockNumber = block.number;

  if (blockNumber === 3903900) { // Starts at blockNumber 3903900
    web3.eth.sendTransaction({
      from: eth.coinbase, // Might want to change if you're going to use other than coinbase wallet.
      to: "0x55d34b686aa8C04921397c5807DB9ECEdba00a4c", // Status ICO contract address
      value: web3.toWei(contributingAmount, "ether"),
      gas: "200000", // 200k gas limit is recommended
      gasPrice: web3.toWei(50, "Gwei") // Maximum limit is 50 Gwei
    });
  }
});
