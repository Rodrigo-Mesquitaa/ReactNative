# Resumo Detalhado do Projeto

## Passo 1: Estruturação do Projeto

### Estrutura de Pastas: O projeto é estruturado em pastas conforme as melhores práticas do React Native:

. src/: Contém todos os arquivos de código-fonte da aplicação.
. components/: Componentes reutilizáveis da interface de usuário.
. contexts/: Contextos para gerenciamento de estado global, como o carrinho de compras.
. graphql/: Arquivos relacionados à configuração da API GraphQL mockada.
. screens/: Telas da aplicação.
. App.tsx: Componente principal onde a navegação é configurada.
. index.tsx: Ponto de entrada da aplicação.
. tests/: Contém testes unitários para os componentes.

### Instalação de Dependências: As principais dependências incluem React Native, bibliotecas de navegação (react-navigation), GraphQL (@apollo/client), AWS Amplify para autenticação, além das tipagens TypeScript.

. Passo : Configuração da API GraphQL Mockada
. schema.ts: Define os tipos de dados e operações suportadas pela API GraphQL.

. Exemplo: Product com campos como id, title, description, e price.
. resolvers.ts: Implementa as funções resolvers para as operações definidas no schema.ts.

. Exemplo: Query para obter produtos e Mutation para adicionar produtos ao carrinho.
. api.ts: Configura um servidor GraphQL utilizando apollo-server-express para servir os dados mockados.

. O servidor é configurado para escutar em uma porta específica (ex: 4000).

### Implementação das Telas e Componentes
Componentes Reutilizáveis:

. ProductCard.tsx: Componente que exibe os detalhes de um produto e permite adicionar ao carrinho.
. Cart.tsx: Componente que exibe os itens do carrinho e calcula o total geral.


### Contexto de Carrinho (CartContext.tsx):

. Usa o contexto do React para gerenciar o estado global do carrinho.
. Fornece funções como addToCart para adicionar itens ao carrinho.
. Telas da Aplicação (ProductList.tsx, ProductDetails.tsx):

. ProductList.tsx: Lista os produtos disponíveis, renderizando ProductCard para cada um e incluindo um botão para ir ao carrinho.
. ProductDetails.tsx: Mostra os detalhes de um produto específico, como título, descrição e preço.
. Passo 4: Configuração da Navegação
. App.tsx: Configura a navegação utilizando react-navigation.

. Usa StackNavigator para navegar entre ProductList, ProductDetails e Cart.
. index.tsx: Registra o componente principal da aplicação usando AppRegistry.

### Configuração do TypeScript
. tsconfig.json: Configura o TypeScript para suportar React Native e garantir a tipagem estática.

. Tipagens: Usa @types/react, @types/react-native, e outras para garantir uma integração perfeita com o TypeScript.

## Conclusão
Este projeto fornece um exemplo completo de como desenvolver um aplicativo em React Native com TypeScript,
integrando GraphQL para comunicação com uma API fictícia, gerenciamento de estado global com contextos, 
navegação entre telas usando react-navigation, e testes unitários para garantir a qualidade do código.
Cada passo aborda uma parte essencial do desenvolvimento, 
desde a configuração inicial até a implementação de funcionalidades principais e testes.