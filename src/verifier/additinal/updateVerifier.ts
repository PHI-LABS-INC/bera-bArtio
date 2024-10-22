import { VerifierManager } from '@phi-hub/sdk';
import { verifySettings } from './verifyConfig';
import { keccak256, recoverMessageAddress, toBytes } from 'viem';
import { utf8ToBytes } from '@ethereumjs/util';
import { VERIFIER_PRIVATE_KEY } from '../../config';

async function updateVerifiers() {
  // Define the chain ID for Base Sepolia testnet
  const credChainId = 80084;

  // Initialize the VerifierManager
  const verifierManager = new VerifierManager(VERIFIER_PRIVATE_KEY, credChainId);

  // Iterate through each verify setting
  for (const setting of verifySettings) {
    console.log(`Updating verifier for credId: ${setting.credId} with setting:`, setting);
    const messageHash = keccak256(utf8ToBytes('updateVerifier'));
    // Update verifier using the setting
    const signature = await verifierManager.createSignature(messageHash);
    const recovererAddress = await recoverMessageAddress({ message: messageHash, signature });
    if (recovererAddress !== setting.address) {
      throw new Error(`Recovered address ${recovererAddress} does not match the expected address ${setting.address}`);
    }
    console.log(`Successfully signed message. Recovered address: ${recovererAddress}`);
    try {
      const arweaveId = await verifierManager.updateVerifier(
        {
          address: setting.address,
          verificationSource: setting.verificationSource,
          endpoint: setting.endpoint,
          signature,
          message: messageHash,
        },
        setting.credId,
      );
      console.log(`Successfully updated verifier for credID: ${setting.credId}. Arweave ID: ${arweaveId}`);
    } catch (error) {
      console.error(`Error updating verifier for credId ${setting.credId}:`, error);
    }

    // Sleep for 1 second before the next iteration to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
}

// Execute the updateVerifiers function
updateVerifiers()
  .then(() => console.log('All verifiers updated successfully.'))
  .catch((error) => console.error('Error in updateVerifiers process:', error));
