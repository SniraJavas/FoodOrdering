import { StyleSheet, Image, Text, View } from 'react-native';
import products from '../../../assets/data/products';
import Colors from '../../constants/Colors';
import ProductListItem from '@/components/ProductListItem';

export default function TabOneScreen() {
  return (
    <View>
    <ProductListItem product={products[0]} />
    <ProductListItem product={products[1]} />
    </View>
  );
}
