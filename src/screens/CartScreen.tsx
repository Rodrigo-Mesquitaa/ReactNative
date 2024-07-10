import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCart } from '../contexts/CartContext';

const CartScreen: React.FC = () => {
  const { cartItems } = useCart();

  // Mocked total calculation
  const total = cartItems.length * 10; // Assuming each product costs $10

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <View style={styles.cartItems}>
        {cartItems.map((productId, index) => (
          <Text key={index}>{`Product ${productId}`}</Text>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  total: {
    fontSize: 18,
    marginBottom: 8,
  },
  cartItems: {
    marginTop: 16,
  },
});

export default CartScreen;