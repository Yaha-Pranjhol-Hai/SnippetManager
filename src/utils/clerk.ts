import { createClerkClient } from '@clerk/clerk-sdk-node';

const clerkClient = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

async function getUserFromClerk(userId: string) {
  try {
    const user = await clerkClient.users.getUser(userId);
    return {
      emailAddress: user.emailAddresses[0]?.emailAddress || '',
      firstName: user.firstName || '',
      lastName: user.lastName || '',
    };
  } catch (error) {
    console.error('Error fetching user from Clerk:', error);
    throw new Error('Failed to fetch user from Clerk');
  }
}

export { getUserFromClerk };