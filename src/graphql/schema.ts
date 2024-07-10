export const typeDefs = `
  type Product {
    id: ID!
    title: String!
    description: String!
    price: Float!
    imageUrl: String
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    addToCart(productId: ID!): Boolean
  }
`;