const Token1 = artifacts.require("Token1");

module.exports = async function(deployer) {
  const initialSupply = 1000;
  console.log("Deploying Token1 with initial supply:", initialSupply);
  await deployer.deploy(Token1, initialSupply);
};
