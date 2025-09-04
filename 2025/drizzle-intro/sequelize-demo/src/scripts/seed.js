import { faker } from '@faker-js/faker';

import Todo from '../models/todo.model.js';
import sequelize from '../utils/db.helper.js';

async function syncModel() {
  await Todo.sync({ force: true });
}

async function insertTodos(rowNumber = 10) {
  for (let i = 0; i < rowNumber; i++) {
    await Todo.create({
      id: Number(Date.now() + i),
      name: faker.person.fullName(),
      email: faker.internet.email(),
    });
  }
}

await syncModel();
await insertTodos();

// const todos = await Todo.findAll();
// for (const todo of todos) {
//   const num = Number(todo.email);

//   console.log(num);
// }

console.log(JSON.stringify(todos, null, 2));

sequelize.close();
