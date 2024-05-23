import { View, Text } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";
import products from '../../../../assets/data/products';
import { Image, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import Button from "@/components/Button";
export default function TabOneScreen() {

    const { id } = useLocalSearchParams();
    const product = products.find((p) => p.id.toString() == id);
    const sizes = ["S", "M", "L", "XL"]

    const [selectedSize,setSselectedSize] = useState("M");

    const AddToCart = () =>{
        
    }
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: product?.name }} />

            <Image source={{ uri: product?.image }} style={styles.image} />
            <Text>Select size</Text>
            <View style={styles.sizesContainer}>
                {sizes.map(size => {
                    return (
                        <Pressable onPress={() => setSselectedSize(size)}  style={[styles.size,{backgroundColor:size == selectedSize ? "grey":"white"}]} key={size} >
                            <Text style={[styles.sizeText,{color: size == selectedSize ? "black":"grey"}]}>
                                {size}
                            </Text>
                        </Pressable>
                    )
                })}
            </View>
            <Text style={styles.price}>R{product?.price}</Text>
            <Button onPress={AddToCart} text="Add to cart"/>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 1,
    },
    container: {
        flex: 1,
        padding: 20,
    },
    price: {
        fontSize: 10,
        fontWeight: 'bold',

    },
    sizesContainer:{
            flexDirection: "row",
            padding:10,
            justifyContent: "space-around"
    },
    size:{
        padding:20,
        borderRadius: 25,
    },
    sizeText:{
        fontSize:20,
        fontWeight:'500',
    }
})