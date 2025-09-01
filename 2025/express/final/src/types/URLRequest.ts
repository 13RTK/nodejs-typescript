import type { Request } from 'express';

export default interface URLRequest extends Request {
  body: {
    id: number;
    originURL: string;
    customCode?: string;
  };
}
