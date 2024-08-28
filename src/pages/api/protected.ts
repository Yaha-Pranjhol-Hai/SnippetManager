import { requireAuth } from '@clerk/nextjs/api';
import type { NextApiRequest, NextApiResponse } from 'next';

export default requireAuth((req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'This is a protected route' });
});
