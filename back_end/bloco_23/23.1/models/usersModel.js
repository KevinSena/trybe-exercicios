const connection = require("./connection");

const setUser = async (firstName, lastName, email, password) => {
  await connection.execute('INSERT INTO users.usersData (firstName, lastName, email, userPassword) VALUES (?, ?, ?, ?)',
  [firstName, lastName, email, password]);
};

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users.usersData');
  return users;
};

const getById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM users.usersData WHERE id=?', [id]);
  return users;
};

module.exports = { setUser, getUsers, getById };
