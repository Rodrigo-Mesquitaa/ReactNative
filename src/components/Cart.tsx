import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';

const Cart: React.FC = () => {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((total, productId) => {
    // Simulando um preço baseado no ID do produto (pode ser substituído pela lógica real)
    if (productId === '1') {
      return total + 9.99;
    } else if (productId === '2') {
      return total + 19.99;
    }
    return total;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <Text style={styles.item}>Product {item}</Text>}
        keyExtractor={(item) => item}
        ListFooterComponent={<Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Cart;