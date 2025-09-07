import type { URLRecordResponse } from '../types/Response.ts';
import type { Request, Response } from 'express';
import { getURLRecordByURLCode } from '../services/url-record.service.ts';

interface GetOriginURLRequest extends Request {
  params: {
    urlCode: string;
  };
}

export async function getOriginURL(
  req: GetOriginURLRequest,
  res: Response<URLRecordResponse>
) {
  const { urlCode } = req.params;

  if (!urlCode) {
    return res.status(400).json({ message: 'URL code is required' });
  }

  const urlRecord = await getURLRecordByURLCode(urlCode);

  if (!urlRecord) {
    return res.status(404).json({ message: 'URL code not found' });
  }

  return res
    .status(200)
    .json({ message: 'Success', data: urlRecord.originURL });
}
