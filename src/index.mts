import express from 'express';
import clienteRoutes from './routes/clienteRoutes';

const app = express();
const port = 3000;

// Outras configurações do servidor, middlewares, etc.

app.use(express.json());
app.use('/api', clienteRoutes); // Defina o caminho base para as rotas do Cliente

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});