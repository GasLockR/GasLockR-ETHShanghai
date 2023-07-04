import { ethers } from 'ethers';
import abi from './callPermitABI.js';
import cartographerAbi from './cartographerAbi.js';

const providerRPC = {
  moonbeam: {
    name: 'moonbeam',
    rpc: 'https://1rpc.io/glmr',
    chainId: 1284,
  },
};
const provider = new ethers.JsonRpcProvider(providerRPC.moonbeam.rpc, {
  chainId: providerRPC.moonbeam.chainId,
  name: providerRPC.moonbeam.name,
});


const userSigner = new ethers.Wallet('INSERT-PRIVATE-KEY', provider);

/*
  TODO: 
  The thirdPartyGasSigner is provided by GasLockR as paymaster, user should buy gas fee subscription service to activate the thirdPartyGasSigner.

  const thirdPartyGasSigner;
*/


const domain = {
  name: 'Call Permit Precompile',
  version: '1',
  chainId: 1284,
  verifyingContract: '0x000000000000000000000000000000000000080a',
};

const types = {
  CallPermit: [
    { name: 'from', type: 'address' },
    { name: 'to', type: 'address' },
    { name: 'value', type: 'uint256' },
    { name: 'data', type: 'bytes' },
    { name: 'gaslimit', type: 'uint64' },
    { name: 'nonce', type: 'uint256' },
    { name: 'deadline', type: 'uint256' },
  ],
};

const cartographerInterface = new ethers.Interface(cartographerAbi);
const data = cartographerInterface.encodeFunctionData('buyVoyages', [
  0n, // Voyage type: Easy
  1n, // Number of voyages to buy
  '0x72A33394f0652e2Bf15d7901f3Cd46863d968424', // Voyage V2 contract
]);

const gasEstimate = await provider.estimateGas({
  from: userSigner.address,
  to: '0xD1A9bA3e61Ac676f58B29EA0a09Cf5D7f4f35138', // Cartographer V1 contraact
  data,
})

const callPermit = new ethers.Contract(
  '0x000000000000000000000000000000000000080a', // Call Permit contract
  abi, 
  thirdPartyGasSigner
);

const nonce = await callPermit.nonces(userSigner.address);

const message = {
  from: userSigner.address,
  to: '0xD1A9bA3e61Ac676f58B29EA0a09Cf5D7f4f35138', // Cartographer V1 contract
  value: 0,
  data,
  gaslimit: gasEstimate + 50000n,
  nonce,
  deadline: '1714762357000',
};

const signature = await userSigner.signTypedData(domain, types, message);
console.log(`Signature hash: ${signature}`);

const formattedSignature = ethers.Signature.from(signature);

const dispatch = await callPermit.dispatch(
  message.from,
  message.to,
  message.value,
  message.data,
  message.gaslimit,
  message.deadline,
  formattedSignature.v,
  formattedSignature.r,
  formattedSignature.s
);

await dispatch.wait();
console.log(`Transaction hash: ${dispatch.hash}`);
