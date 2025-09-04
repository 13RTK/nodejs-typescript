import { DataTypes } from 'sequelize';
import sequelize from '../utils/db.helper.js';

const Todo = sequelize.define(
  'Todo',
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: 'tb_todo',
    createdAt: false,
    updatedAt: false,
  }
);

export default Todo;
