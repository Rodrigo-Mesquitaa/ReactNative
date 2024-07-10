# Resumo Detalhado do Projeto

## Passo 1: Estrutura��o do Projeto

### Estrutura de Pastas: O projeto � estruturado em pastas conforme as melhores pr�ticas do React Native:

. src/: Cont�m todos os arquivos de c�digo-fonte da aplica��o.
. components/: Componentes reutiliz�veis da interface de usu�rio.
. contexts/: Contextos para gerenciamento de estado global, como o carrinho de compras.
. graphql/: Arquivos relacionados � configura��o da API GraphQL mockada.
. screens/: Telas da aplica��o.
. App.tsx: Componente principal onde a navega��o � configurada.
. index.tsx: Ponto de entrada da aplica��o.
. tests/: Cont�m testes unit�rios para os componentes.

### Instala��o de Depend�ncias: As principais depend�ncias incluem React Native, bibliotecas de navega��o (react-navigation), GraphQL (@apollo/client), AWS Amplify para autentica��o, al�m das tipagens TypeScript.

. Passo : Configura��o da API GraphQL Mockada
. schema.ts: Define os tipos de dados e opera��es suportadas pela API GraphQL.

. Exemplo: Product com campos como id, title, description, e price.
. resolvers.ts: Implementa as fun��es resolvers para as opera��es definidas no schema.ts.

. Exemplo: Query para obter produtos e Mutation para adicionar produtos ao carrinho.
. api.ts: Configura um servidor GraphQL utilizando apollo-server-express para servir os dados mockados.

. O servidor � configurado para escutar em uma porta espec�fica (ex: 4000).

### Implementa��o das Telas e Componentes
Componentes Reutiliz�veis:

. ProductCard.tsx: Componente que exibe os detalhes de um produto e permite adicionar ao carrinho.
. Cart.tsx: Componente que exibe os itens do carrinho e calcula o total geral.


### Contexto de Carrinho (CartContext.tsx):

. Usa o contexto do React para gerenciar o estado global do carrinho.
. Fornece fun��es como addToCart para adicionar itens ao carrinho.
. Telas da Aplica��o (ProductList.tsx, ProductDetails.tsx):

. ProductList.tsx: Lista os produtos dispon�veis, renderizando ProductCard para cada um e incluindo um bot�o para ir ao carrinho.
. ProductDetails.tsx: Mostra os detalhes de um produto espec�fico, como t�tulo, descri��o e pre�o.
. Passo 4: Configura��o da Navega��o
. App.tsx: Configura a navega��o utilizando react-navigation.

. Usa StackNavigator para navegar entre ProductList, ProductDetails e Cart.
. index.tsx: Registra o componente principal da aplica��o usando AppRegistry.

### Configura��o do TypeScript
. tsconfig.json: Configura o TypeScript para suportar React Native e garantir a tipagem est�tica.

. Tipagens: Usa @types/react, @types/react-native, e outras para garantir uma integra��o perfeita com o TypeScript.

## Conclus�o
Este projeto fornece um exemplo completo de como desenvolver um aplicativo em React Native com TypeScript,
integrando GraphQL para comunica��o com uma API fict�cia, gerenciamento de estado global com contextos, 
navega��o entre telas usando react-navigation, e testes unit�rios para garantir a qualidade do c�digo.
Cada passo aborda uma parte essencial do desenvolvimento, 
desde a configura��o inicial at� a implementa��o de funcionalidades principais e testes.