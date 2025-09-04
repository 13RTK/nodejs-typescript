import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { todoTable } from '../db/schema.ts';
import { faker } from '@faker-js/faker';

import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execPromise = promisify(exec);

const { stdout } = await execPromise('pnpm drizzle-kit push');
console.log(stdout);

const db = drizzle(process.env.DATABASE_URL!);

async function insertTodos(rowNumber: number = 10) {
  for (let i = 0; i < rowNumber; i++) {
    await db.insert(todoTable).values({
      id: Date.now() + i,
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
}

await insertTodos();

const todos = await db.select().from(todoTable);
console.log(todos);
