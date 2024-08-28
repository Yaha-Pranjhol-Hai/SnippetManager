declare module '@clerk/nextjs/api' {
    import { NextApiRequest, NextApiResponse } from 'next';
  
    export function requireAuth(handler: (req: NextApiRequest, res: NextApiResponse) => void): (
      req: NextApiRequest,
      res: NextApiResponse
    ) => void;
  }
  