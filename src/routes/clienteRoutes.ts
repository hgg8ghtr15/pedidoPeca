import { Router } from 'express';
import { ClienteController } from '../controllers/ClienteController';

const router = Router();
const clienteController = new ClienteController();

router.post('/clientes', clienteController.criarCliente.bind(clienteController));
router.get('/clientes/:id', clienteController.obterClientePorId.bind(clienteController));
router.put('/clientes/:id', clienteController.atualizarCliente.bind(clienteController));
router.delete('/clientes/:id', clienteController.excluirCliente.bind(clienteController));

export default router;