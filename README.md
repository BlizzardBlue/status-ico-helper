# status-ico-helper
Helps you contribute Status ICO in a lightspeed by programmatically sending TX.


## How-to
Carefully follow the steps below.

### Step 1
Launch `geth` under `console` mode.
```
$ geth console
```

### Step 2
Unlock account to send TX without need of entering passphrase.
```
> personal.unlockAccount(eth.coinbase);
```

### Step 3
Declare `contributingAmount` variable with the amount you want to contribute. *Unit: Ether
```
> var contributingAmount = 10;
```

### Step 4
Copy & Paste the code below.
```
web3.eth.filter('latest', function(err, blockHash) {
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
```

### Step 5
Wait till the starting block gets mined!
It'll automatically send TX to ICO contract when block height hits the starting block.
