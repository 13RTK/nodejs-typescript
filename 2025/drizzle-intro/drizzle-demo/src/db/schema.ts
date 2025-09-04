import { bigint, pgTable, text } from 'drizzle-orm/pg-core';

export const todoTable = pgTable('todo', {
  id: bigint({ mode: 'number' }).primaryKey(),
  name: text().notNull(),
  email: text().notNull(),
});
