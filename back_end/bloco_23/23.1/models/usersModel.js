const connection = require("./connection");

const setUser = async (firstName, lastName, email, password) => {
  const [{insertId}] = await connection
    .execute(`INSERT INTO users.usersData (firstName, lastName, email, userPassword) 
      VALUES (?, ?, ?, ?)`,
  [firstName, lastName, email, password]);
  return insertId;
};

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users.usersData');
  return users;
};

const getById = async (id) => {
  const [users] = await connection.execute('SELECT * FROM users.usersData WHERE id=?', [id]);
  return users;
};

const changeById = (id, firstName, lastName, email, password) => connection
  .execute(`
    UPDATE users.usersData
    SET firstName=?, lastName=?, email=?, userPassword=?
    WHERE id=?`,
  [firstName, lastName, email, password, id]);

module.exports = { setUser, getUsers, getById, changeById };
