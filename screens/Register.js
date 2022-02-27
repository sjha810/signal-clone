import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Text } from "react-native-elements";
import styles from "./Style";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const Register = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imagesUrl, setImageUrl] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions(
			{
				headerBackTitle: "Back to Login",
			},
			[navigation]
		);
	});

	const register = () => {
		
		createUserWithEmailAndPassword(auth, email, password)
			.then((authUser) => {
				if(authUser.user){
					updateProfile(authUser.user, {
						displayName: name,
						photoURL:
							imagesUrl ||
							"https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
					});
				}
				
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<KeyboardAvoidingView  style={styles.container}>
			<StatusBar style="light" />

			<Text h3 style={{ marginBottom: 50 }}>
				Create a signal account
			</Text>

			<View style={styles.inputContainer}>
				<Input
					placeholder="Full Name"
					autofocus
					type="text"
					value={name}
					onChangeText={(name) => setName(name)}
				/>

				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={(email) => setEmail(email)}
				/>

				<Input
					placeholder="Password"
					secureTextEntry
					type="password"
					value={password}
					onChangeText={(password) => setPassword(password)}
				/>

				<Input
					placeholder="Profile Picture URL (optional)"
					autofocus
					type="text"
					value={imagesUrl}
					onChangeText={(imagesURL) => setImageUrl(imagesURL)}
					onSubmitEditing={register}
				/>
			</View>
			<View>
				<Button
					containerStyle={styles.button}
					raised
					title="Register"
					onPress={register}
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default Register;
