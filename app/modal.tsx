import { Text, StyleSheet, Pressable, Image, View } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import Animated, { FadeInDown, FadeInLeft } from 'react-native-reanimated';
import image from '../assets/images/supra.png';
const IMAGE = Image.resolveAssetSource(image).uri;

const modal = () => {
	const router = useRouter();

	return (
		<View style={styles.container}>
			<Pressable onPress={() => router.back()}>
			<View style={styles.header}>
					<Text style={styles.headerText}>Car Details</Text>
				</View>
				<Animated.Image
					sharedTransitionTag="sharedTag"
					source={{ uri: IMAGE }}
					style={styles.image}
				/>

				<Animated.Text style={styles.text} entering={FadeInLeft.duration(400).delay(800)}>
					Toyota Supra 2022 
				</Animated.Text>
				<Animated.View entering={FadeInDown.duration(400).delay(600)} style={styles.card}>
					<Text>$20.99....It Goes Vroom Vroom</Text>
				</Animated.View>
			</Pressable>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2a3439', 
		alignContent: 'center',
		justifyContent: 'flex-start',
		paddingTop: 15, 
	},
	header: {
		width: '100%',
		padding: 20,
		backgroundColor: '#bdc3c7', 
		alignItems: 'center',
		borderRadius: 15, 
		marginTop: 20, 
	},
	headerText: {
		color: 'black',
		fontSize: 24,
		fontFamily:'Roboto',
		fontWeight: 'bold',
	},
	image: {
		width: '100%',
		height: 200,
		resizeMode: 'contain'
	},
	text: {
		color: 'white',
		fontSize: 30,
		margin: 20
	},
	card: {
		color: 'white',
		width: 350,
		height: 200,
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 20,
		margin: 20
	}
});
export default modal;