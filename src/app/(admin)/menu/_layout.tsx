import { FontAwesome } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";

import Colors from '@/constants/Colors';


export default function MenuStack (){
return (
    <Stack
        screenOptions={{
            headerRight: () => (
                <Link href="/" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="plus-square-o"
                        size={30}
                        color='blue'
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              )
        }}
    >
      <Stack.Screen 
          name = '[id]'
          options={{
            headerRight: () => (
                <Link href="/" asChild>
                  <Pressable>
                    {({ pressed }) => (
                      <FontAwesome
                        name="pencil"
                        size={30}
                        color='blue'
                        style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                </Link>
              )
        }} />


        <Stack.Screen 
        name="Index" 
        options={{title:"Menu"}}
        
        />
    </Stack>
)

}