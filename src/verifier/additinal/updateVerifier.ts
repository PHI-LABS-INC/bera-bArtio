import { VerifierManager } from '@phi-hub/sdk';
import { verifySettings } from './verifyConfig';

async function updateVerifiers() {
  // Define the chain ID for Base Sepolia testnet
  const credChainId = 80084;

  // Initialize the VerifierManager
  const verifierManager = new VerifierManager(credChainId);

  // Iterate through each verify setting
  for (const setting of verifySettings) {
    try {
      console.log(`Updating verifier for credId: ${setting.credId} with setting:`, setting);

      // Update verifier using the setting

      const arweaveId = await verifierManager.updateVerifier(setting, setting.credId);
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
