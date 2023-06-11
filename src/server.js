const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('teste!');
});

const empresas = []

const empresa1 = {
  "empresa": "CA",
  "site": "https://teuestoque.sidapecas.com.br/sugestao-compra",
  "apelido": "CA",
  "usuario": "comprasca@viacometa.com.br",
  "senha": "ca123"
}

const empresa2 = {
  "empresa": "CO",
  "site": "https://teuestoque.sidapecas.com.br/sugestao-compra",
  "apelido": "CO",
  "usuario": "comprasco@viacometa.com.br",
  "senha": "co123"
}
const empresa3 = {
  "empresa": "TGHY",
  "site": "https://hyundai.teuestoque.com.br/sugestao-compra",
  // "site": "https://hyundai.teuestoque.com.br/no-access",
  "apelido": "TGHY",
  "usuario": "comprasty@viacometa.com.br",
  "senha": "ty123"
}

empresas.push(empresa1, empresa2, empresa3)

app.get('/empresa', (req, res) => {

  // console("Chamada Realziada")
  res.status(200).json(empresas)
})

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});