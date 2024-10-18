import 'dotenv/config';
import { txFilter_Any, txFilter_Contract, txFilter_Standard } from '../verifier/utils/routescan/filter';
import { CredConfig, EtherscanTxItem } from '../utils/types';
import { ENDPOINT } from '../config';
import { Address, decodeAbiParameters } from 'viem';

const baseSettings = {
  network: 80084,
  startBlock: '0', // eligible network for your cred
  endBlock: '99999999',
  buyShareRoyalty: 0, // buy share royalty 0%
  sellShareRoyalty: 50, // sell royalty 0.5%
  quantity: 1, // initial share quantity
  verificationSource: 'https://github.com/PHI-LABS-INC/bara-bArtio',
};

export const credConfig: { [key: number]: CredConfig } = {
  0: {
    ...baseSettings,
    title: 'Transact on Bara bArtio',
    requirement: 'Execute any transaction on Bara bArtio',
    credType: 'ADVANCED',
    verificationType: 'SIGNATURE',
    apiChoice: 'etherscan',
    apiKeyOrUrl: process.env.ROUTESCAN_API_KEY ?? '',
    contractAddress: 'any',
    methodId: 'any',
    filterFunction: txFilter_Any,
    mintEligibility: (result: number) => result > 0,
    transactionCountCondition: (txs: any[], address: string) =>
      txs.filter((tx) => tx.from.toLowerCase() === address.toLowerCase()).length,
    project: 'Bara',
    tags: ['Transaction'],
    relatedLinks: ['https://www.berachain.com/'],
  },
  1: {
    ...baseSettings,
    title: 'Stryke Options Novice',
    requirement: 'Purchase Option on the Stryke platform',
    credType: 'BASIC',
    verificationType: 'SIGNATURE',
    apiChoice: 'etherscan',
    apiKeyOrUrl: process.env.ROUTESCAN_API_KEY ?? '',
    contractAddress: '0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D',
    methodId: '0x0b2f6f3f',
    filterFunction: txFilter_Standard,
    mintEligibility: (result: number) => result > 0,
    transactionCountCondition: (txs: any[], address: string) =>
      txs.filter((tx) => tx.from.toLowerCase() === address.toLowerCase()).length,
    project: 'BEX',
    tags: ['DeFi'],
    relatedLinks: [
      'https://bartio.bex.berachain.com/swap',
      'https://bartio.beratrail.io/address/0x21e2C0AFd058A89FCf7caf3aEA3cB84Ae977B73D',
    ],
  },
};

export const credVerifyEndpoint: { [key: number]: string } = Object.fromEntries(
  Object.keys(credConfig).map((key) => [key, `https://${ENDPOINT}/api/verify/${key}`]),
);

const checkItemIdZero = (tx: EtherscanTxItem): boolean => {
  if (tx.methodId === '0x715488b0' && tx.input.length >= 74) {
    const inputData = '0x' + tx.input.slice(10);
    const [, itemId] = decodeAbiParameters([{ type: 'uint256' }, { type: 'uint256' }], inputData as `0x${string}`);
    return BigInt(itemId) === BigInt(0);
  }
  return false;
};
