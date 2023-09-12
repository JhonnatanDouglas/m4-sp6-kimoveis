# Projeto Final: KImóveis - TypeORM com Relacionamentos

## Introdução

O projeto "KImóveis" consiste no desenvolvimento de uma aplicação para o gerenciamento de serviços de uma imobiliária fictícia chamada Kimóveis. A aplicação permite o cadastro de imóveis e usuários interessados na aquisição de propriedades, agendamento de visitas às propriedades e consulta de horários disponíveis.

## Rotas e Funcionalidades

A aplicação possui as seguintes rotas e funcionalidades:

### POST /users

- **Descrição**: Rota para criação de um novo usuário.
- **Corpo da Requisição**:
  - `name` (string): Nome do usuário (obrigatório, máximo de 45 caracteres).
  - `email` (string): Email do usuário (obrigatório, máximo de 45 caracteres, único).
  - `password` (string): Senha do usuário (obrigatório, máximo de 120 caracteres).
- **Retorno**:
  - Todos os dados do usuário, exceto a senha.

### GET /users

- **Descrição**: Rota para listar todos os usuários.
- **Retorno**:
  - Todos os dados de todos os usuários, exceto as senhas.
- **Autenticação**: Apenas administradores.

### PATCH /users/:id

- **Descrição**: Rota para atualizar os dados de um usuário.
- **Parâmetros de Rota**:
  - `id` (number): ID do usuário a ser atualizado.
- **Corpo da Requisição**:
  - `name` (string): Novo nome do usuário (máximo de 45 caracteres).
  - `admin` (boolean): Novo status de administrador do usuário (apenas administradores podem atualizar).
- **Retorno**:
  - Todos os dados atualizados do usuário.
- **Autenticação**: Apenas administradores ou dono da conta.

### DELETE /users/:id

- **Descrição**: Rota para realizar um soft delete de um usuário.
- **Parâmetros de Rota**:
  - `id` (number): ID do usuário a ser deletado.
- **Retorno**:
  - Mensagem de sucesso.
- **Autenticação**: Apenas administradores.

### POST /login

- **Descrição**: Rota para autenticação de um usuário.
- **Corpo da Requisição**:
  - `email` (string): Email do usuário.
  - `password` (string): Senha do usuário.
- **Retorno**:
  - Token de autenticação.

### POST /categories

- **Descrição**: Rota para criação de uma nova categoria.
- **Corpo da Requisição**:
  - `name` (string): Nome da categoria (obrigatório, máximo de 45 caracteres, único).
- **Retorno**:
  - Todos os dados da categoria criada.
- **Autenticação**: Apenas administradores.

### GET /categories

- **Descrição**: Rota para listar todas as categorias.
- **Retorno**:
  - Todos os dados de todas as categorias.
- **Autenticação**: Não necessita de autenticação.

### GET /categories/:id/realEstate

- **Descrição**: Rota para listar todos os imóveis que pertencem a uma categoria.
- **Parâmetros de Rota**:
  - `id` (number): ID da categoria.
- **Retorno**:
  - Todos os imóveis pertencentes à categoria.
- **Autenticação**: Não necessita de autenticação.

### POST /realEstate

- **Descrição**: Rota para criação de um novo imóvel.
- **Corpo da Requisição**:
  - `value` (decimal): Valor do imóvel (obrigatório, formato 12,2).
  - `size` (inteiro): Tamanho do imóvel (obrigatório).
  - `address` (objeto):
    - `street` (string): Rua do endereço (obrigatório, máximo de 45 caracteres).
    - `zipCode` (string): CEP do endereço (obrigatório, máximo de 8 caracteres).
    - `number` (number): Número do endereço (obrigatório, inteiro e positivo).
    - `city` (string): Cidade do endereço (obrigatório, máximo de 20 caracteres).
    - `state` (string): Estado do endereço (obrigatório, máximo de 2 caracteres).
  - `categoryId` (number): ID da categoria à qual o imóvel pertence (obrigatório).
- **Retorno**:
  - Todos os dados do imóvel criado.
- **Autenticação**: Apenas administradores.

### GET /realEstate

- **Descrição**: Rota para listar todos os imóveis.
- **Retorno**:
  - Todos os dados de todos os imóveis.
- **Autenticação**: Não necessita de autenticação.

### POST /schedules

- **Descrição**: Rota para agendar uma visita a um imóvel.
- **Corpo da Requisição**:
  - `date` (string): Data da visita (formato americano AAAA-MM-DD).
  - `hour` (string): Horário da visita (formato HH:MM).
  - `realEstateId` (number): ID do imóvel a ser visitado (obrigatório).
- **Retorno**:
  - Todos os dados do agendamento.
- **Autenticação**: Obrigatória (token).

### GET /schedules/realEstate/:id

- **Descrição**: Rota para listar todos os agendamentos de um imóvel.
- **Parâmetros de Rota**:
  - `id` (number): ID do imóvel.
- **Retorno**:
  - Todos os agendamentos do imóvel.
- **Autenticação**: Apenas administradores.

## Observações

- O código está em TypeScript e utiliza o TypeORM para interagir com o banco de dados PostgreSQL.
- A autenticação é baseada em token JWT.
- Cada rota possui validações e restrições de autenticação, conforme as regras estabelecidas.
- Todas as respostas da API são serializadas usando a biblioteca zod.
- A entrega deve seguir rigorosamente as regras e os testes automatizados já fornecidos.
- Execute os testes regularmente durante o desenvolvimento para evitar problemas futuros.
- Aproveite a oportunidade de aprendizado e divirta-se desenvolvendo o projeto!
