const express = require('express');

const app = express();
const PORT = 3000;

const cepRouter = require('./routers/cepRouter');

app.get('/ping', (_req, res) => res.status(200).json({ "message": "pong!" }));

app.use('/cep', cepRouter);

app.use((err, _req, res, _next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Server Problem',
      code: err.code
    }
  })
})

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}\nhttps://localhost:${PORT}`));
