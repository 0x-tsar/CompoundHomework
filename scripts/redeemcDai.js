const MyDeFiProject = artifacts.require('MyDeFiProject.sol');

const cDaiAddress = '0xbc689667c13fb2a04f09272753760e38a95b998c';
const daiAddress = '0x31f42841c2db5173425b5223809cf3a38fede360';


module.exports = async done => {
  const myDeFiProject = await MyDeFiProject.deployed();
//   await myDeFiProject.redeem(cDaiAddress, 100 * Math.pow(10, 8)); //cToken have 8 decimals
//   await myDeFiProject.redeem(cDaiAddress, web3.utils.toWei('0.00000096')); //cToken have 8 decimals
  await myDeFiProject.redeem(cDaiAddress, web3.utils.toWei('0.00001208'));
  console.log('cDai redeemed!');
  done();
}