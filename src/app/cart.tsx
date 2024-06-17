import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useCart } from '@/providers/CartProvider';
import { FlatList } from 'react-native';
import CartListItem from '@/components/CartListItem';
import { CartItem } from '@/types';

export default function CartScreen() {
  const cart = useCart();

  console.log("Cart ", cart);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number of Items in Cart: {cart?.items.length}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList 
        data={cart.items} 
        renderItem={({ item }) => <CartListItem cartItem={item} />}
      />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
