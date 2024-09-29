import { View, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import image from './assets/images/supra.png';
import Animated from 'react-native-reanimated';
const IMAGE = Image.resolveAssetSource(image).uri;

const index = () => {
    return (
        <View style={styles.container}>
            <Link href="/modal" asChild>
                <Pressable>
                    <Animated.Image
                        sharedTransitionTag="sharedTag"
                        source={{ uri: IMAGE }}
                        style={styles.image}
                    />
                </Pressable>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    }
});

export default index;