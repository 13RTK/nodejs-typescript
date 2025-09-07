import { bigint, pgTable, varchar } from 'drizzle-orm/pg-core';

export const urlRecordTable = pgTable('url_record', {
  id: bigint({ mode: 'number' }).primaryKey(),
  originURL: varchar({ length: 255 }).notNull(),
  shortURL: varchar({ length: 255 }).notNull(),
  urlCode: varchar({ length: 255 }).notNull().unique(),
});
