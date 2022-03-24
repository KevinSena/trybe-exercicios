const express = require('express');
const { verifyPost } = require('./middlewares/verifyPost');
const { setUser, getUsers, getById, changeById } = require('./models/usersModel');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/user', verifyPost, async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const newId = await setUser(firstName, lastName, email, password);
  return res.status(201).json({id: newId, firstName, lastName, email});
});

app.get('/user', async (_req, res) => {
  const users = await getUsers();
  return res.status(200).json(users)
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getById(id);
  if (user.length === 0) return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
  });
  return res.status(200).json(user);
});

app.put('/user/:id', verifyPost, async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, password } = req.body;
  const user = await getById(id);
  if (user.length === 0) return res.status(404).json({
      "error": true,
      "message": "Usuário não encontrado"
  });
  await changeById(id, firstName, lastName, email, password);
  const newUser = await getById(id);
  return res.status(201).json(newUser);
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
