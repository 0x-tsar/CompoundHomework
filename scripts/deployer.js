// // const MyDeFiProject = require('../contracts/MyDeFiProject.sol');
// const MyDeFiProject = artifacts.require('MyDeFiProject.sol');


// module.exports = async done => {

//     try {
//         const [admin, _] = await web3.eth.getAccounts();
//         const myDeFiProject = await MyDeFiProject.new('0xcfa7b0e37f5ac60f3ae25226f5e39ec59ad26152', '0xb90c96607b45f9bB7509861A1CE77Cb8a72EdFB2');
        

//         // const lend_value = web3.utils.fromWei('100000000');  
//         const lend_value = web3.utils.toWei('0.000001');  
//         // const lend_value = web3.utils.fromWei('10000000', 'ether')
//         console.log(lend_value);
//         //returns cDai, Dai
//         // const bal = await myDeFiProject.getbalance('0xbc689667c13fb2a04f09272753760e38a95b998c');
//         // console.log(`balances dai: ${bal[1]}`)
//         // console.log(`balances cDai: ${bal[0]}`)

//         //enter market EVENT MARKET ENTERED  param (address cTokenAddress)
//         //supply EVENT APPROVE CONTRACT params (address cTokenAddress, uint underlyingAmount)
//         //redeem EVENT APPROVE CONTRACT params (address cTokenAddress, uint underlyingAmount)
//         // await myDeFiProject.enterMarket('0xbc689667c13fb2a04f09272753760e38a95b998c');
//         // await myDeFiProject.supply('0xbc689667c13fb2a04f09272753760e38a95b998c', lend_value);
//         I FORGOT TO SEND 10 DAI TO MY CONTRACT... MAY SOLVE THIS ISSUE
//         await myDeFiProject.supply('0x31f42841c2db5173425b5223809cf3a38fede360', lend_value);

//         // function testing(address cTokenAddress, uint underlyingAmount)external returns(uint){
//         // const testing = await myDeFiProject.testing('0xbc689667c13fb2a04f09272753760e38a95b998c'); 
//         // const testing2 = await myDeFiProject.testing2('0xbc689667c13fb2a04f09272753760e38a95b998c'); 

//         // console.log(testing.toString());
//         // console.log(testing2);
//         // const daiAddress = await myDeFiProject.getaddress('0xbc689667c13fb2a04f09272753760e38a95b998c');
//         // console.log('dai addr: ',daiAddress);

//         // 0x31F42841c2db5173425b5223809CF3A38FEde360
//         console.log('deployed Compound contract');
//         // console.log(myDeFiProject);

//     }catch(e) {
//         console.log(e);
//     }

//     done();
//   };