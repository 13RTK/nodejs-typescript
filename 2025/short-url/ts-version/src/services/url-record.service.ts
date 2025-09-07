import { eq } from 'drizzle-orm';
import { urlRecordTable } from '../db/schema.js';
import db from '../utils/db.helper.js';

export async function getURLRecordByURLCode(urlCode: string) {
  const urlRecords = await db
    .select()
    .from(urlRecordTable)
    .where(eq(urlRecordTable.urlCode, urlCode));

  return urlRecords[0];
}

export async function getURLRecordByOriginURL(originURL: string) {
  const urlRecords = await db
    .select()
    .from(urlRecordTable)
    .where(eq(urlRecordTable.originURL, originURL));

  return urlRecords[0];
}

export async function createURLRecord(
  originURL: string,
  shortURL: string,
  urlCode: string
) {
  const urlRecords = await db
    .insert(urlRecordTable)
    .values({
      id: Date.now(),
      originURL,
      shortURL,
      urlCode,
    })
    .returning();

  return urlRecords[0];
}
