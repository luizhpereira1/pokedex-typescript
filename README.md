# Pokédex TypeScript

## Descrição

Mini-projeto de backend desenvolvido com Node.js e TypeScript, utilizando a PokeAPI para consultar informações de Pokémon.

O projeto permite cadastrar, listar e remover Pokémon de um catálogo armazenado em memória.

## Funcionalidades

- Buscar Pokémon por nome ou ID na PokeAPI.
- Adicionar Pokémon ao catálogo.
- Impedir cadastros duplicados pelo ID.
- Listar os Pokémon cadastrados.
- Remover Pokémon pelo ID.
- Tratar erros nas requisições à API.

## Tecnologias utilizadas

- Node.js
- TypeScript
- PokeAPI

## Como executar

É necessário ter o Node.js instalado.

Instale as dependências:

`npm install`

Execute o projeto:

`npx tsx src/main.ts`

Para compilar e executar o JavaScript:

`npx tsc`

`node dist/main.js`

## Estrutura do projeto

- `src/models/Pokemon.ts`: interfaces dos Pokémon.
- `src/services/PokeApiService.ts`: comunicação com a PokeAPI.
- `src/services/CatalogoPokemon.ts`: gerenciamento do catálogo.
- `src/main.ts`: demonstração das funcionalidades.

## Conceitos aplicados

Interfaces, classes, encapsulamento, funções tipadas, arrays, `some()`, `map()`, `filter()`, `forEach()`, `async/await`, `Promise` e `try/catch`.

## Observações

Os Pokémon ficam armazenados em memória. Os dados são perdidos quando o programa é encerrado.

## Organização do projeto

O projeto utiliza uma estrutura baseada no GitFlow:

- `main`: versão principal do projeto.
- `develop`: integração das funcionalidades.
- `feature/documentacao`: melhorias na documentação.

## Testes realizados

Foram realizados testes de:

- Consulta de Pokémon pela PokeAPI.
- Cadastro de Pokémon no catálogo.
- Prevenção de cadastros duplicados.
- Tratamento de Pokémon inexistente.
- Listagem dos Pokémon cadastrados.
- Remoção de Pokémon do catálogo.

## Gerenciamento do projeto

As tarefas foram organizadas utilizando um quadro Kanban
no GitHub Projects.

Quadro Kanban: COLE_AQUI_O_LINK_DO_SEU_KANBAN

## Resultados dos testes

### Busca válida
Entrada: pikachu
Resultado: pikachu adicionado ao catálogo.

### Pokémon duplicado
Entrada: adicionar pikachu novamente
Resultado: Pokémon já cadastrado.

### Busca inválida
Entrada: pokemon-inexistente-123
Resultado: Pokémon não encontrado.

### Remoção
Entrada: remover Pokémon de ID 25
Resultado: Pokémon removido.

### Catálogo após remoção
#4 - charmander - fire
#1 - bulbasaur - grass, poison