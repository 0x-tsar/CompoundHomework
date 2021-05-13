const MyDeFiProject = artifacts.require('MyDeFiProject.sol');

const cDaiAddress = '0xbc689667c13fb2a04f09272753760e38a95b998c';

module.exports = async done => {
  const myDeFiProject = await MyDeFiProject.deployed();
  await myDeFiProject.enterMarket(cDaiAddress);
  done();
}
