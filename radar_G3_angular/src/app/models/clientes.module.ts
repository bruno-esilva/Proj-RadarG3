export interface Cliente {
  id: Number
  nome: String | undefined
  telefone: Number
  email: String
  cpf: Number
  cep: String
  logradouro: String | undefined
  numero: String
  bairro: String
  cidade: String
  estado: String
  complemento: String
}