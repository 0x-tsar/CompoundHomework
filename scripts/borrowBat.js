const MyDeFiProject = artifacts.require('MyDeFiProject.sol');

const cBatAddress = '0xaf50a5a6af87418dac1f28f9797ceb3bfb62750a';

module.exports = async done => {
  const myDeFiProject = await MyDeFiProject.deployed();
  await myDeFiProject.borrow(cBatAddress, web3.utils.toWei('0.00000001'));

  const balances = await myDeFiProject.getbalance('0xbc689667c13fb2a04f09272753760e38a95b998c');
  console.log('Dai: ',balances[0].toString());
  console.log('cDai: ',balances[1].toString());
  
  const balancesContract = await myDeFiProject.getbalanceAddress('0xbc689667c13fb2a04f09272753760e38a95b998c');
  console.log('Dai contract: ',balancesContract[0].toString());
  console.log('cDai contract: ',balancesContract[1].toString());
  

  console.log('borrow BAT called!')


  done();


}
