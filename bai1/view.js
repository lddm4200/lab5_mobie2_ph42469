import React, { useRef, useState, useEffect } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { Camera } from "expo-camera";
import { useSelector, useDispatch } from 'react-redux';
import { takePhoto } from './action';

const ChupAnh = () => {
    const [hasPer, setHasPer] = useState(null);
    const cameraRef = useRef();
    const photoUri = useSelector(state => state.photoUri);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPer(status === 'granted');
        })();
    }, []);

    const chup = async () => {
        if (cameraRef.current) {
            const photo = await cameraRef.current.takePictureAsync();
            console.log('Ảnh đã được chụp: ', photo.uri);
            dispatch(takePhoto(photo.uri));
        }
    };

    return (
        <View style={styles.container}>
            {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.avatar} />
            ) : (
                <Image source={{uri: 'https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg'}} style={styles.avatar} />
            )}
            {hasPer ? (
                <Camera style={styles.camera} ref={cameraRef} type={Camera.Constants.Type.back} />
            ) : (
                <Text>Không có quyền truy cập camera</Text>
            )}
            <TouchableOpacity style={styles.captureButton} onPress={chup}>
                <Text style={styles.captureText}>Chụp ảnh</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    camera: {
        width: 350,
        height: '50%',
    },
    captureButton: {
        backgroundColor: 'blue',
        padding: 10,
        margin: 10,
    },
    captureText: {
        color: 'white',
    },
});

export default ChupAnh;
