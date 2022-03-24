const express = require('express');
const { verifyPost } = require('./middlewares/verifyPost');
const { setUser, getUsers, getById } = require('./models/usersModel');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/user', verifyPost, (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  setUser(firstName, lastName, email, password);
  res.status(201).json({firstName, lastName, email, password})
});

app.get('/user', async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json(users)
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);
  return res.status(200).json(user);
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
