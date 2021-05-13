const MyDeFiProject = artifacts.require("MyDeFiProject.sol");

module.exports = function (deployer, network) {
  let comptrollerAddress, priceOracleProxy;
  if(network === 'ropsten') {
    comptrollerAddress = '0xcfa7b0e37f5ac60f3ae25226f5e39ec59ad26152';
    priceOracleProxy = '0xb90c96607b45f9bB7509861A1CE77Cb8a72EdFB2';
  }
  
  deployer.deploy(MyDeFiProject, comptrollerAddress, priceOracleProxy);
};
