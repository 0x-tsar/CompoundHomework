pragma solidity ^0.8.4;

interface PriceOracleInterface {
  function getUnderlyingPrice(address asset) external view returns(uint);
}
