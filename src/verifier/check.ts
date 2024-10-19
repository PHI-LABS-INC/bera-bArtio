import { credConfig } from '../cred/credConfig';
import { handleTransactionCheck } from './utils/routescan/transactionUtils';
import { ContractCallCredConfig, SignatureCredConfig, CredResult, BalanceCheckCredConfig } from '../utils/types';
import { Address } from 'viem';
import { handleContractCall } from './utils/contractCall';
import { handleBalanceCheck, handleNFTBalanceCheck } from './utils/routescan/routeScanUtils';

export async function check_cred(address: string, id: number): Promise<CredResult> {
  const config = credConfig[id];
  if (!config) {
    throw new Error(`Invalid cred id: ${id}`);
  }
  if (config.verificationType !== 'SIGNATURE') {
    throw new Error(`Unsupported verification type: ${config.verificationType}`);
  }
  const check_address = address.toLowerCase() as Address;

  switch (config.apiChoice) {
    case 'etherscan':
      return handleTransactionCheck(config as SignatureCredConfig, check_address);
    case 'contractCall':
      return handleContractCall(config as ContractCallCredConfig, check_address);
    case 'balanceCheck':
      return handleBalanceCheck(config as BalanceCheckCredConfig, check_address);
    case 'nftbalance':
      return handleNFTBalanceCheck(config as BalanceCheckCredConfig, check_address);
    // case 'neynar':
    //   return handleNeynarCheck(config as NeynarCredConfig, address);
    default:
      throw new Error(`Invalid API choice: ${config}`);
  }
}
