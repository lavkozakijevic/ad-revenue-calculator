import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "689461f09b961c6a3b123cd9", 
  requiresAuth: true // Ensure authentication is required for all operations
});
