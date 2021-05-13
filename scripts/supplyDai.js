const MyDeFiProject = artifacts.require('MyDeFiProject.sol');

const cDaiAddress = '0xbc689667c13fb2a04f09272753760e38a95b998c';

module.exports = async done => {
  const myDeFiProject = await MyDeFiProject.deployed();
  
  const cAddress = await myDeFiProject.getaddress(cDaiAddress);
  console.log(cAddress);


  // const balances = await myDeFiProject.getbalance(cDaiAddress);
  // console.log('Dai: ',balances[0].toString());
  // console.log('cDai: ',balances[1].toString());
  
  // const balancesContract = await myDeFiProject.getbalanceAddress(cDaiAddress);
  // console.log('Dai contract: ',balancesContract[0].toString());
  // console.log('cDai contract: ',balancesContract[1].toString());
  
  // await myDeFiProject.supply(cDaiAddress, web3.utils.toWei('0.00000204'));
// 0xbc689667c13fb2a04f09272753760e38a95b998c

    console.log('Operation completed!');
    done();
}
