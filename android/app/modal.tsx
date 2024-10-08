import { Text, StyleSheet, Pressable, Image } from 'react-native';
import React from 'react';
import { BlurView } from 'expo-blur';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import image from '../assets/image.png';
const IMAGE = Image.resolveAssetSource(image).uri;

const modal = () => {
	const router = useRouter();

	return (
		<BlurView intensity={40} style={styles.container} tint="dark">
			<Pressable onPress={() => router.back()}>
				<Animated.Image
					sharedTransitionTag="sharedTag"
					source={{ uri: IMAGE }}
					style={styles.image}
				/>

				<Animated.Text style={styles.text} entering={FadeInLeft.duration(400).delay(500)}>
					React Native Shared Element Transition
				</Animated.Text>
				<Animated.View entering={FadeInDown.duration(400).delay(600)} style={styles.card}>
					<Text>More cool React Native tutorials on Galaxies.dev!</Text>
				</Animated.View>
			</Pressable>
		</BlurView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center'
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'contain'
	},
	text: {
		fontSize: 30,
		margin: 20
	},
	card: {
		width: 350,
		height: 200,
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		margin: 20
	}
});
export default modal;