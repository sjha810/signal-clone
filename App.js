import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, LogBox } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import Register from "./screens/Register";
import HomeScreen from "./screens/HomeScreen";

LogBox.ignoreLogs([
	"Warning: AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'.",
]);
const Stack = createStackNavigator();

const globalScreenOptions = {
	headerStyle: { backgroundColor: "#2C6BED" },
	headerTitleStyle: { color: "white" },
	headerTintColor: "white",
};

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				// initialRouteName="home"
				screenOptions={globalScreenOptions}
			>
				<Stack.Screen name="Login" component={LoginScreen} />
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Home" component={HomeScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
