import { Address, Chain, createPublicClient, http, PublicClient } from 'viem';
import { bearNetworkChainTestnet, arbitrum } from 'viem/chains';
import { ContractCallCredConfig, CredResult } from '../../utils/types';
import { rpc } from '../../config';

const supportedNetworks = {
  BERACHAIN_TESTNET: 80084,
  ARBITRUM_MAINNET: 42161,
};

export async function handleContractCall(config: ContractCallCredConfig, check_address: Address): Promise<CredResult> {
  if (![supportedNetworks.BERACHAIN_TESTNET, supportedNetworks.ARBITRUM_MAINNET].includes(config.network)) {
    throw new Error(`Unsupported network: ${config.network}`);
  }

  const chain = getChainForNetwork(config.network);
  const publicClient = await createPublicClientForNetwork(chain, config.network);
  const contractCallResult = await callContract(publicClient, config, check_address);
  return handleContractCallResult(config, contractCallResult);
}

function getChainForNetwork(network: number): Chain {
  switch (network) {
    case supportedNetworks.BERACHAIN_TESTNET:
      return bearNetworkChainTestnet;
    case supportedNetworks.ARBITRUM_MAINNET:
      return arbitrum;
    default:
      throw new Error(`Unsupported network: ${network}`);
  }
}

async function createPublicClientForNetwork(chain: Chain, network: number): Promise<PublicClient> {
  try {
    const rpcUrl = getRpcUrlForNetwork(network);
    const publicClient = createPublicClient({
      chain,
      transport: http(rpcUrl),
    });

    if (!publicClient) {
      throw new Error('PublicClient is undefined');
    }

    return publicClient;
  } catch (error) {
    console.error('Error creating public client:', error);
    throw new Error(`Failed to create publicClient: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function getRpcUrlForNetwork(network: number): string {
  switch (network) {
    case supportedNetworks.BERACHAIN_TESTNET:
      return rpc.berachain;
    case supportedNetworks.ARBITRUM_MAINNET:
      return rpc.arbitrum;
    default:
      throw new Error(`No RPC URL configured for network: ${network}`);
  }
}

async function callContract(
  publicClient: PublicClient,
  config: ContractCallCredConfig,
  check_address: Address,
): Promise<unknown> {
  const args = await config.args(check_address);
  return publicClient.readContract({
    address: config.contractAddress,
    abi: config.abi,
    functionName: config.functionName,
    args,
  });
}

function handleContractCallResult(config: ContractCallCredConfig, contractCallResult: unknown): CredResult {
  const mintEligibility = config.contractCallCondition(contractCallResult);
  if (config.credType === 'ADVANCED') {
    return [mintEligibility, contractCallResult?.toString() ?? '0'];
  } else {
    return [mintEligibility, ''];
  }
}
