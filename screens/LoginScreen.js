import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import styles from './Style'
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (authUser)=>{
			console.log(authUser)
			if(authUser){
				navigation.replace("Home");
			}
		});
		return unsubscribe;
	});

	const signIn = () => {
		console.log("sign in");
		signInWithEmailAndPassword(auth, email, password)
		.catch((error) => alert(error))
	};
	return (
		<KeyboardAvoidingView behavior="padding" style={styles.container}>
			<StatusBar style="light" />
			<Image
				source={{
					uri: "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
				}}
				style={{ width: 200, height: 200 }}
			/>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Email"
					autoFocus
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
					onSubmitEditing={signIn}
				/>
			</View>

			<View>
				<Button
					containerStyle={styles.button}
					onPress={signIn}
					title="Login"
				/>
				<Button
					onPress={() => navigation.navigate("Register")}
					containerStyle={styles.button}
					type="outline"
					title="Register"
				/>
			</View>
		</KeyboardAvoidingView>
	);
};

export default LoginScreen;
