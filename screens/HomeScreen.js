import { View, Text, SafeAreaView } from "react-native";
import React, { useLayoutEffect } from "react";
import { ScrollView } from "react-native";
import CustomListItem from "../components/CustomListItem";
import { Avatar } from "react-native-elements";
import { auth } from "../firebase";
import { TouchableOpacity } from "react-native";
import { signOut } from "firebase/auth";

const HomeScreen = ({ navigation }) => {
	const signOutUser = () => {
		signOut(auth).then(() => {
			navigation.replace("Login");
		});
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Signal",
			headerStyle: { backgroundColor: "#fff" },
			headerTitleStyle: { color: "#000" },
			headerTintColor: "#000",
			headerRight: () => (
				<View style={{ marginRight: 20 }}>
					<TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
						<Avatar
							rounded
							source={{ uri: auth?.currentUser?.photoURL }}
						/>
					</TouchableOpacity>
				</View>
			),
		});
	}, []);
	return (
		<SafeAreaView>
			<ScrollView>
				<CustomListItem />
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
