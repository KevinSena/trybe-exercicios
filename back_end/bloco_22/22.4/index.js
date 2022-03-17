const express = require('express');
const fs = require('fs/promises');
const app = express();
const PORT = 3001;
const simpsons = require('./simpsons.json');

app.use(express.json());

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

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(201).json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` } )
});

app.get('/simpsons', (_req, res) => {
  res.status(200).send(simpsons);
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  const charac = simpsons.find((e) => e.id == id);
  charac ? res.status(200).send(charac.name) :
    res.status(404).json({ message: 'simpson not found' });
});

app.post('/simpsons', ({ body }, res) => {
  const { id, name } = body;
  if(simpsons.find(e => e.id == id) || simpsons.find(e => e.name == name)){
    return res.status(409).json({ message: 'id already exists' });
  };
  simpsons.push({id, name});
  fs.writeFile('simpsons.json', JSON.stringify(simpsons), 'utf-8');
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log('Aplicação rodando na porta 3001\n',`http://localhost:${PORT}`);
});