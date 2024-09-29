import { View, StyleSheet, Pressable, Image, Text} from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import image from '../assets/images/supra.png';
import Animated from 'react-native-reanimated';
const IMAGE = Image.resolveAssetSource(image).uri;

const index = () => {
    return (
        <View style={styles.container}>
            <Link href="/modal" asChild>
                <Pressable>
                <View style={styles.card}>
                    <Animated.Image
                        sharedTransitionTag="sharedTag"
                        source={{ uri: IMAGE }}
                        style={styles.image}
                    />
                    <View style={styles.textContainer}>
                            <Text style={styles.text}>Toyota Supra 2022</Text>
                        </View>
                     </View>
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
        width: '50%',
        height: 200,
        borderRadius: 10, 
        resizeMode: 'contain',
        
    },
    card: {
        flexDirection: 'row', 
        backgroundColor: 'white', 
        borderRadius: 10,  
        alignItems: 'center', 
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    textContainer: {
        flex: 1, 
    },
    text: {
        fontSize: 18, // Adjust the size of the text
        textAlign: 'center', // Center the text
       // marginTop: 10, // Add some margin between the image and text
        color: 'black', 
      },
});

export default index;