import { View,Text } from "@/components/Themed";
import { Stack, useLocalSearchParams } from "expo-router";

export default function TabOneScreen() {
    const {id} = useLocalSearchParams();
    
    return(
        <View>
            <Stack.Screen options={{title: "Details"}} />
            <Text>Product Details : {id}</Text>
        </View>
    )
}