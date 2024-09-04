import { PrismaClient } from '@prisma/client'
import { getAuth } from '@clerk/nextjs/server'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  // Add logic that retrieves the data for the API route
  if (req.method === 'POST') {
    const { userId } = getAuth(req); // extracts the userId from clerk.
    const { email, firstName, lastName } = req.body;

    if(!userId || !email || !firstName || !lastName){
      return res.status(400).json({ error: 'Missing user information'});
    }

    try {
      const existingUser = await prisma.user.findUnique({
        where: { clerkId: userId  },
      })

      if(!existingUser) {
        const newUser = await prisma.user.create({
          data: {
            clerkId: userId,
            email: email || '',
            firstName: firstName || '',
            lastName: lastName || '',
          }
        })
        res.status(201).json({user: newUser});
      } else {
        res.status(200).json({ user: existingUser});
      }

    } catch (error) {
      res.status(500).json({ error: 'Failed to create user'});
    }
  }
  else {
    res.status(405).json({ error: 'Method not allowed'});
  }
}