const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json())

app.listen(PORT, () => {
  console.log('Aplicação rodando na porta 3001\n',`http://localhost:${PORT}`);
})

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong' });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ "message": `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  age > 17 ? res.status(200).json({ "message": `Hello, ${name}!` }) :
  res.status(401).json({ "message": "Unauthorized" });
});
