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
