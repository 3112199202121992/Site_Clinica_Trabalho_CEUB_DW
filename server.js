const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(cors()); // Permite chamadas de outros domínios

app.get('/profissionais', (req, res) => {
  fs.readFile('./profissionais.json', 'utf8', (err, data) => {
    if (err) return res.status(500).json({ erro: 'Erro ao ler os dados.' });

    let profissionais = JSON.parse(data);
    const { especialidade, nome } = req.query;

    if (especialidade) {
      profissionais = profissionais.filter(p =>
        p.especialidade.toLowerCase().includes(especialidade.toLowerCase())
      );
    }

    if (nome) {
      profissionais = profissionais.filter(p =>
        p.nome.toLowerCase().includes(nome.toLowerCase())
      );
    }

    res.json(profissionais);
  });
});

app.listen(PORT, () => {
  console.log(`API rodando em http://localhost:3000/profissionais`);
});