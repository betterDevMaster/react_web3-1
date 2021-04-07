"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getContract = void 0;

const getContract = async (web3, contractDefinition) => {
  // get network ID and the deployed address
  const networkId = await web3.eth.net.getId();
  const deployedAddress = contractDefinition.networks[networkId].address; // create the instance

  const instance = new web3.eth.Contract(contractDefinition.abi, deployedAddress);
  return instance;
};

exports.getContract = getContract;