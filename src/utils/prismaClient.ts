import { PrismaClient } from '@prisma/client';
import { getUserFromClerk } from './clerk'; // Make sure this path is correct

const prisma = new PrismaClient();

async function createUserFromClerk(clerkUserId: string) {
  try {
    const clerkUser = await getUserFromClerk(clerkUserId);

    await prisma.user.create({
      data: {
        email: clerkUser.emailAddress,
        firstName: clerkUser.firstName,
        lastName: clerkUser.lastName,
      },
    });
  } catch (error: any) {
    if (error.code === 'P2002') { // Unique constraint failed
      console.error('User already exists:', error.message);
    } else {
      console.error('Error creating user:', error.message);
    }
  }
}

export { createUserFromClerk };
