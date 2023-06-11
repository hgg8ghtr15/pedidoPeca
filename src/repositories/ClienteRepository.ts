import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from '../database/Cliente';

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {
  // Métodos de acesso ao banco de dados específicos para o Cliente
}
