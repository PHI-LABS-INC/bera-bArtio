import axios from 'axios';
import {
  EtherscanResponse,
  GeneralTxItem,
  EtherscanTxItem,
  TxFilterFunction,
  SignatureCredConfig,
  CredResult,
} from '../../../utils/types';
import { Address, Chain } from 'viem';

const MAX_RETRIES = 5;
const INITIAL_DELAY = 1000;
const MAX_DELAY = 60000; // Maximum wait of 60 seconds

// Network IDs
const ETHEREUM_MAINNET_ID = 1;
const BERACHAIN_TESTNET_ID = 80084;

// Routescan API base URL
const ROUTESCAN_API_BASE_URL = 'https://api.routescan.io/v2/network';

export async function getTransactions(
  api_key: string,
  address: Address,
  contractAddresses: (Address | 'any')[],
  methodIds: (string | 'any')[],
  network: Chain['id'],
  startblock: string,
  endblock: string,
  txFilter: TxFilterFunction,
): Promise<GeneralTxItem[]> {
  return getTransactionsFromNetwork(
    api_key,
    address,
    contractAddresses,
    methodIds,
    network,
    startblock,
    endblock,
    txFilter,
  );
}

function getNetworkPath(network: Chain['id']): string {
  switch (network) {
    case ETHEREUM_MAINNET_ID:
      return 'mainnet/evm/1';
    case BERACHAIN_TESTNET_ID:
      return 'testnet/evm/80084';
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}

async function fetchTransactionsFromNetwork(
  address: string,
  startblock: string,
  endblock: string,
  api_key: string,
  network: Chain['id'],
): Promise<EtherscanResponse> {
  const networkPath = getNetworkPath(network);
  const url = `${ROUTESCAN_API_BASE_URL}/${networkPath}/etherscan/api`;

  const params = {
    module: 'account',
    action: 'txlist',
    address,
    startblock,
    endblock,
    page: '1',
    offset: '1000', // Adjust as needed
    sort: 'desc',
    apikey: api_key,
  };

  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      const response = await axios.get<EtherscanResponse>(url, { params });
      if (response.data.status === '1' && response.data.message === 'OK') {
        return response.data;
      } else {
        console.error(`API error: ${response.data.message}`);
        if (retries === MAX_RETRIES - 1) {
          throw new Error(`API error: ${response.data.message}`);
        }
      }
    } catch (error) {
      console.error('Error fetching transactions:', error);
      if (retries === MAX_RETRIES - 1) {
        throw error;
      }
    }
    const delay = Math.min(INITIAL_DELAY * Math.pow(2, retries), MAX_DELAY);
    console.log(`Request failed. Retrying in ${delay / 1000} seconds...`);
    await new Promise((resolve) => setTimeout(resolve, delay));
    retries++;
  }

  throw new Error('Max retries reached. Unable to fetch transactions.');
}

function transformEtherscanTxToGeneralTx(tx: EtherscanTxItem): GeneralTxItem {
  return {
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    blockNumber: tx.blockNumber,
    methodId: tx.methodId || tx.input.slice(0, 10),
    isError: tx.isError,
    input: tx.input,
  };
}

async function getTransactionsFromNetwork(
  api_key: string,
  address: Address,
  contractAddresses: (Address | 'any')[],
  methodIds: (string | 'any')[],
  network: Chain['id'],
  startblock: string,
  endblock: string,
  filterFunction: TxFilterFunction,
): Promise<GeneralTxItem[]> {
  try {
    const response = await fetchTransactionsFromNetwork(address, startblock, endblock, api_key, network);
    if (!response.result || response.result.length === 0) {
      return [];
    }

    return response.result
      .map(transformEtherscanTxToGeneralTx)
      .filter((tx) => filterFunction(tx, contractAddresses, methodIds));
  } catch (error) {
    console.error('Failed to fetch transactions:', error);
    return []; // Return an empty array in case of error
  }
}

export async function handleTransactionCheck(config: SignatureCredConfig, check_address: Address): Promise<CredResult> {
  const contractAddresses = Array.isArray(config.contractAddress) ? config.contractAddress : [config.contractAddress];
  const methodIds =
    config.methodId === 'any' ? ['any'] : Array.isArray(config.methodId) ? config.methodId : [config.methodId];

  const txs = await getTransactions(
    config.apiKeyOrUrl,
    config.from || check_address,
    contractAddresses,
    methodIds,
    config.network,
    config.startBlock,
    config.endBlock || '99999999',
    config.filterFunction,
  );

  return handleTransactionResult(config, txs, check_address);
}

function handleTransactionResult(config: SignatureCredConfig, txs: any[], address: Address): CredResult {
  const transactionCount = config.transactionCountCondition(txs, address);
  const mintEligibility = config.mintEligibility(transactionCount);

  if (config.credType === 'ADVANCED') {
    return [mintEligibility, transactionCount.toString()];
  }
  return [mintEligibility, ''];
}
