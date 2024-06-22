import { View, Text, StyleSheet, Image, TextInput, Alert } from 'react-native';
import React, { useState } from 'react';
import { defaultPizzaImage } from '../../../components/ProductListItem';
import Colors from '../../../constants/Colors';
import Button from '../../../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';

const CreateScreen = () => {
    const [image, setImage] = useState<string | null>(null);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [errors, setErrors] = useState('');

    const router = useRouter();
    const { id } = useLocalSearchParams();

    const isUpdating = !!id;

    const validateInput = () => {
        setErrors('');
        if (!name) {
            setErrors('Name is required');
            return false;
        }
        if (!price) {
            setErrors('Price is required');
            return false;
        }
        if (isNaN(parseFloat(price))) {
            setErrors('Price should be a number');
            return false;
        }
        return true;
    };

    const onSubmit = () => {
        if (isUpdating) {
            // update
            onUpdateCreate();
        } else {
            //create
            onCreate();
        }
    }
    const onUpdateCreate = () => {

        if (!validateInput()) {
            return;
        }

        console.warn('Updating dish');
        setName('');
        setPrice('');
        setImage('');
        router.back();
    }

    const onCreate = () => {
        if (!validateInput()) {
            return;
        }

        console.warn('Creating dish');
        setName('');
        setPrice('');
        setImage('');
        router.back();
    };

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    const onDelete =()=>{
        console.warn("Deleting");
        
    }
    const confirmDelete = ()=>{
        Alert.alert("Confirm","Do you want to delete this product ?",[
            {
                text:"Cancel",
                style:"cancel"
            },
            {
                text:"Delete",
                style: "destructive",
                onPress:onDelete,
            }
            ]);
    }

    return (
        <View style={styles.container}>
            <Stack.Screen options={{ title: isUpdating ? 'Update Product' : 'Create Product' }} />
            <Image
                source={{ uri: image || defaultPizzaImage }}
                style={styles.image}
                resizeMode="contain"
            />
            <Text onPress={pickImage} style={styles.textButton}>
                Select Image
            </Text>

            <Text style={styles.label}>Name</Text>
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Margarita..."
                style={styles.input}
            />

            <Text style={styles.label}>Price ($)</Text>
            <TextInput
                value={price}
                onChangeText={setPrice}
                placeholder="9.99"
                style={styles.input}
                keyboardType="numeric"
            />
            <Text style={styles.error}>{errors}</Text>
            <Button onPress={onSubmit} text={isUpdating ? "Update " : "Create "} />
            <Text style={styles.textButton} onPress={confirmDelete}>Delete</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    image: {
        width: '50%',
        aspectRatio: 1,
        alignSelf: 'center',
    },
    textButton: {
        alignSelf: 'center',
        fontWeight: 'bold',
        color: Colors.light.tint,
        marginVertical: 10,
    },
    label: {
        color: 'gray',
    },
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginTop: 5,
        marginBottom: 20,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
});

export default CreateScreen;


