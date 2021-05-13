pragma solidity ^0.8.4;

interface ComptrollerInterface {
  function enterMarkets(address[] calldata cTokens) external returns (uint[] memory);
  function getAccountLiquidity(address owner) external view returns(uint, uint, uint);
}

  
  
  
