const MyDeFiProject = artifacts.require('MyDeFiProject.sol');

const cBatAddress = '0xaF50a5A6Af87418DAC1F28F9797CeB3bfB62750A';

module.exports = async done => {
  const myDeFiProject = await MyDeFiProject.deployed();
  await myDeFiProject.repayBorrow(cBatAddress, web3.utils.toWei('0.00000001'));
  console.log('Bat repayed!!');
  done();
}