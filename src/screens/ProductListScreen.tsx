import React from 'react';
import { View, FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';

const ProductListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const products = [
    { id: '1', title: 'Product 1', description: 'Description of Product 1', price: 9.99, imageUrl: 'https://example.com/product1.jpg' },
    { id: '2', title: 'Product 2', description: 'Description of Product 2', price: 19.99, imageUrl: 'https://example.com/product2.jpg' },
    // Adicione mais produtos conforme necessário
  ];

  const navigateToProductDetails = (productId: string) => {
    navigation.navigate('ProductDetails', { productId });
  };

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigateToProductDetails(item.id)} />
        )}
        numColumns={2}
      />
    </View>
  );
};

export default ProductListScreen;