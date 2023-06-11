import { getCustomRepository } from 'typeorm';
import { Cliente } from '../database/Cliente';
import { ClienteRepository } from '../repositories/ClienteRepository';

export class ClienteService {
  private clienteRepository: ClienteRepository;

  constructor() {
    this.clienteRepository = getCustomRepository(ClienteRepository);
  }

  async criarCliente(nome: string, email: string): Promise<Cliente> {
    const cliente = new Cliente();
    cliente.nome = nome;
    cliente.email = email;

    return this.clienteRepository.save(cliente);
  }


  async obterClientePorId(id: number): Promise<Cliente | undefined> {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    return cliente ?? undefined;
  }

  async atualizarCliente(id: number, nome: string, email: string): Promise<Cliente | undefined> {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      return undefined;
    }

    cliente.nome = nome;
    cliente.email = email;

    return this.clienteRepository.save(cliente);
  }

  async excluirCliente(id: number): Promise<boolean> {
    const cliente = await this.clienteRepository.findOne({ where: { id } });
    if (!cliente) {
      return false;
    }

    await this.clienteRepository.remove(cliente);
    return true;
  }
}