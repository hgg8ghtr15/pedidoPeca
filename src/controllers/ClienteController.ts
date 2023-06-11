import { Request, Response } from 'express';
import { ClienteService } from '../services/ClienteService';

export class ClienteController {
  private clienteService: ClienteService;

  constructor() {
    this.clienteService = new ClienteService();
  }

  async criarCliente(req: Request, res: Response): Promise<Response> {
    const { nome, email } = req.body;

    try {
      const cliente = await this.clienteService.criarCliente(nome, email);
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao criar o cliente' });
    }
  }

  async obterClientePorId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const cliente = await this.clienteService.obterClientePorId(Number(id));
      if (cliente) {
        return res.json(cliente);
      } else {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao obter o cliente' });
    }
  }

  async atualizarCliente(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, email } = req.body;

    try {
      const cliente = await this.clienteService.atualizarCliente(Number(id), nome, email);
      if (cliente) {
        return res.json(cliente);
      } else {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao atualizar o cliente' });
    }
  }

  async excluirCliente(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const result = await this.clienteService.excluirCliente(Number(id));
      if (result) {
        return res.json({ message: 'Cliente excluído com sucesso' });
      } else {
        return res.status(404).json({ error: 'Cliente não encontrado' });
      }
    } catch (error) {
      return res.status(500).json({ error: 'Ocorreu um erro ao excluir o cliente' });
    }
  }
}