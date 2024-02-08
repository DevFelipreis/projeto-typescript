---

# Sistema de CRUD para Carros

Este é um sistema de CRUD para gerenciar informações sobre carros, incluindo modelo, marca, cor, ano e valor.

## Funcionalidades

### 1. Criar Carro (Create)
   - Os usuários podem adicionar novos carros ao sistema, fornecendo as seguintes informações:
     - Modelo
     - Marca
     - Cor
     - Ano
     - Valor

### 2. Ler Carro (Read)
   - Os usuários podem visualizar detalhes de carros existentes, incluindo:
     - Modelo
     - Marca
     - Cor
     - Ano
     - Valor

### 3. Atualizar Carro (Update)
   - Os usuários podem atualizar informações de carros existentes, incluindo:
     - Modelo
     - Marca
     - Cor
     - Ano
     - Valor

### 4. Deletar Carro (Delete)
   - Os usuários podem excluir carros do sistema.

## Tecnologias Utilizadas

- **Backend**: Node.js com Express.js para construir a API RESTful.
- **Banco de Dados**: Um banco de dados relacional (por exemplo, PostgreSQL, MySQL) ou não-relacional (por exemplo, MongoDB) para armazenar os dados dos carros.
- **TypeScript**: Para garantir a segurança e a manutenibilidade do código.

## Configuração do Ambiente de Desenvolvimento

1. **Node.js e npm**: [Baixe e instale o Node.js](https://nodejs.org/) (v14.x ou superior) que inclui o npm.
2. **Clonar o Repositório**: Use `git@github.com:DevFelipreis/projeto-typescript.git` para clonar este repositório em sua máquina local.
3. **Instalar Dependências**: Navegue até o diretório do projeto e execute `npm install` para instalar as dependências do projeto.
4. **Configurar o Banco de Dados**: Configure o banco de dados de acordo com as instruções no arquivo `conexao.ts` e `tabelaCarros.sql`.
5. **Configurar variáveis de ambiente**: Crie um arquivo `.env` e configure as credenciais a partir do arquivo `.env-example`.

## Como Usar

1. **Iniciar o Servidor**: Execute `npm start` para iniciar o servidor backend.
2. **Interagir com a API**: Use ferramentas como Postman ou curl para enviar requisições HTTP para a API, conforme necessário.

## Estrutura do Projeto

- `dis/`: (abreviação de "distribuição") contém os arquivos resultantes da compilação/transpilação do código-fonte do projeto. Geralmente, esses arquivos são gerados a partir de código-fonte TypeScript para JavaScript ou de um formato de código-fonte mais recente para um formato mais antigo compatível com ambientes de execução específicos.
-  `src/`: Este diretório contém os arquivos-fonte TypeScript do backend.
- `main.ts`: O ponto de entrada principal do projeto TypeScript. Inicializa o aplicativo e executa o código principal.
- `controllers/`: Controladores que definem a lógica de manipulação dos carros.
- `rotas.ts`: Rotas da API para manipulação de carros.
- `database/`: Scripts e configurações relacionados ao banco de dados.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir um problema ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).

---

