import validator from 'validator';
import type { Request, Response } from 'express';
import type { URLRecordResponse } from '../types/Response.ts';

import { generateShortURL } from '../utils/url.helper.ts';
import {
  getURLRecordByOriginURL,
  getURLRecordByURLCode,
  createURLRecord as createURLRecordService,
} from '../services/url-record.service.ts';

interface CreateURLRecordRequest extends Request {
  body: {
    originURL: string;
    urlCode?: string;
  };
}

export async function createURLRecord(
  req: CreateURLRecordRequest,
  res: Response<URLRecordResponse>
) {
  const { originURL, urlCode } = req.body;

  // If originURL is not provided
  if (!originURL) {
    return res.status(400).json({ message: 'Origin URL is required' });
  }

  // If originURL is not a valid URL
  if (!validator.isURL(originURL)) {
    return res.status(400).json({ message: 'Invalid origin URL' });
  }

  // TODO:
  const urlRecord = await getURLRecordByOriginURL(originURL);
  if (urlRecord) {
    return res
      .status(200)
      .json({ message: 'Origin URL already exists', data: urlRecord });
  }

  // If urlCode is provided
  if (urlCode) {
    // TODO:
    const urlRecord = await getURLRecordByURLCode(urlCode);

    // If urlCode already exists
    if (urlRecord) {
      return res.status(400).json({ message: 'URL code already exists' });
    }

    // If urlCode is not provided, generate a short URL and create a new URL record
    const shortURL = await generateShortURL(urlCode);
    console.log(shortURL);

    const createdURLRecord = await createURLRecordService(
      originURL,
      shortURL,
      urlCode
    );

    return res.status(201).json({
      message: 'URL record created successfully',
      data: createdURLRecord,
    });
  }

  // If urlCode is not provided, generate a short URL and create a new URL record
  const shortURL = await generateShortURL();

  const createdURLRecord = await createURLRecordService(
    originURL,
    shortURL,
    shortURL.split('/').at(-1)!
  );

  return res.status(201).json({
    message: 'URL record created successfully',
    data: createdURLRecord,
  });
}
