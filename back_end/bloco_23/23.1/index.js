const express = require('express');
const { verifyPost } = require('./middlewares/verifyPost');
const { setUser } = require('./models/usersModel');
const app = express();
const PORT = 3001;

app.use(express.json());

app.post('/user', verifyPost, (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  setUser(firstName, lastName, email, password);
  res.status(201).json({firstName, lastName, email, password})
});

app.listen(PORT, () => console.log(`Aplicação rodando na porta ${PORT}`));
