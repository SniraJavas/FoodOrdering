import { StyleSheet, FlatList, Text, View } from 'react-native';
import products from '../../../../assets/data/products';
import Colors from '../../../constants/Colors';
import ProductListItem from '@/components/ProductListItem';

export default function TabOneScreen() {
  return (
    <FlatList 
      data={products}
      renderItem={({item}) => <ProductListItem product={item} />}
      numColumns={3}
      columnWrapperStyle = {{gap:10,padding:10}}
      contentContainerStyle ={{gap:10}}
    />
  );
}
