const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
  const initialSupply = web3.utils.toWei('1000', 'ether');  // Converts 1000 tokens to wei (18 decimals)
  deployer.deploy(MyToken, initialSupply);
};
