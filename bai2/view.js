import React, { useState } from "react";
import { Text, View, Button, Image } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from 'expo-image-picker';
import { selectImage } from './action';

const ChonAnh = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch();
    const selectedImageUri = useSelector(state => state.selectedImage);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            dispatch(selectImage(result.uri));
        }
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={{ uri: selectedImage || selectedImageUri || 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg' }}
                style={{ width: 200, height: 200, marginBottom: 40 }} />
            <Button title="Chọn ảnh từ thư viện"
                onPress={pickImage} />
        </View>
    );
};

export default ChonAnh;
