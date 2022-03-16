const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json())

app.get('/ping', (_req, res) => {
  res.status(201).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ "message": `Hello, ${name}!` });
});

app.listen(PORT, () => {
  console.log('Aplicação rodando na porta 3001\n',`http://localhost:${PORT}`);
})
