const products = [
    { id: '1', title: 'Product 1', description: 'Description of Product 1', price: 9.99 },
    { id: '2', title: 'Product 2', description: 'Description of Product 2', price: 19.99 },
    // Adicione mais produtos conforme necessário
  ];
  
  const cartItems: string[] = [];
  
  export const resolvers = {
    Query: {
      products: () => products,
      product: (_: any, { id }: { id: string }) => products.find(product => product.id === id),
    },
    Mutation: {
      addToCart: (_: any, { productId }: { productId: string }) => {
        const product = products.find(product => product.id === productId);
        if (product) {
          cartItems.push(productId);
          return true;
        }
        return false;
      },
    },
  };