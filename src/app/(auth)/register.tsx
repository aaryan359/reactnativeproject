import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	Image,
} from "react-native";
import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import imagePath from "@/src/constants/imagePath";
import { router } from "expo-router";




import { useDispatch } from "react-redux";

import { setToken, clearToken } from "../../redux/authSlice";


const Register = () => {

	const [isChecked, setChecked] = useState(false);
	const [isPasswordVisible, setPasswordVisible] = useState(false);
	const dispatch = useDispatch();

	const handleSignIn = () => {

		// dispatch(setToken("token_example"));
       router.push('/(auth)/verify');
  };

	const backtohome = () => {
		router.back();
	};

	const togglePasswordVisibility = () => {
		setPasswordVisible(!isPasswordVisible);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.headerContainermain}>
				<View style={styles.headerContainer}>

					<TouchableOpacity onPress={backtohome}>
						<MaterialIcons
							style={
								styles.headerIcon
							}
							name="arrow-back-ios"
							size={24}
							color="black"
						/>
					</TouchableOpacity>
					<Text style={styles.headerText}>
						Sign Up
					</Text>
				</View>
			</View>

			<View style={styles.inputContainermain}>
				<View style={styles.inputContainer}>
					<TextInput
						placeholder="Name"
						placeholderTextColor="#91919F"
						style={styles.input}
					/>

					<TextInput
						placeholder="Email"
						placeholderTextColor="#91919F"
						style={styles.input}
					/>

<View style={[ styles.passwordContainer]}>
	<TextInput
		placeholder="Password"
		placeholderTextColor="#91919F"
		style={styles.passwordInput}
		secureTextEntry={!isPasswordVisible}
	/>
	<TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
		<MaterialIcons
			name={isPasswordVisible ? "visibility" : "visibility-off"}
			size={24}
			color="#91919F"
		/>
	</TouchableOpacity>
</View>
				</View>
			</View>

			<View style={styles.agreementContainer}>
				<Checkbox
					style={styles.checkbox}
					value={isChecked}
					onValueChange={setChecked}
				/>
				<Text style={styles.agreementText}>
					By signing up, you agree to the {"\n"}
					Terms of Service and Privacy Policy
				</Text>
			</View>

			<View style={styles.buttonContainer}>
				<TouchableOpacity
					style={styles.signUpButton}
					activeOpacity={0.8}>
					<Text
						style={styles.signUpText}
						onPress={handleSignIn}>
						Sign Up
					</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.orText}>Or with</Text>

			<View style={styles.googlebuttonContainer}>
				<TouchableOpacity style={styles.googlebtn}>
					<Image
						source={imagePath.googlelogo}
						style={styles.image}
						resizeMode="contain"
					/>
					<Text
						style={styles.googlebtntext}
						onPress={handleSignIn}>
						Sign Up with Google
					</Text>
				</TouchableOpacity>
			</View>

			<Text style={styles.footerText}>
				Already have an account?{" "}
				<TouchableOpacity activeOpacity={0.5}>
					<Text style={styles.linkText}>
						Login
					</Text>
				</TouchableOpacity>
			</Text>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#FFFFFF",
    marginTop:15
	},

	headerContainermain: {
		
		paddingHorizontal: 16,
    paddingVertical:10,
    backgroundColor: "#FFFFFF",

	},

	headerContainer: {

		flexDirection: "row",
		alignItems: "center",
	},

	headerText: {
		flex: 1,
		textAlign: "center",
		fontSize: 25,
		fontWeight: "bold",
	},

	headerIcon: {
		alignSelf: "flex-start",
	},

	inputContainermain: {
		marginTop: 70,
		paddingHorizontal: 16,
	},

	inputContainer: {
		gap: 20,
	},

	input: {
		padding: 16,
		borderRadius: 17,
		fontSize: 18,
    borderWidth: 1,
		borderColor: "#E5E5E5",
	},


  passwordContainer: {
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 1,
		borderColor: "#E5E5E5",
		borderRadius: 17,
		backgroundColor: "#FFF",
   
	},
	passwordInput: {
		flex: 1,
		fontSize: 18,
		paddingVertical:20,
    borderRadius:17,
    paddingHorizontal:10,
  
		color: "#000",
	},
	eyeIcon: {
		paddingHorizontal: 10,
	},

	agreementContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 20,
		paddingHorizontal: 16,
	},

	checkbox: {
		marginRight: 10,
	},

	agreementText: {
		color: "#000000",
		flexShrink: 1,
	},

	buttonContainer: {
		marginTop: 20,
		paddingHorizontal: 16,
	},

	signUpButton: {
		backgroundColor: "#7F3DFF",
		paddingVertical: 15,
		borderRadius: 16,
		alignItems: "center",
	},

	signUpText: {
		color: "#FCFCFC",
		fontSize: 20,
		fontWeight: "bold",
	},

	orText: {
		color: "#91919F",
		textAlign: "center",
		marginTop: 20,
	},

	googlebuttonContainer: {
		paddingHorizontal: 16,
		marginTop: 10,
	},

	googlebtn: {
		flexDirection: "row",
		backgroundColor: "#EEE5FF",
		paddingVertical: 15,
		borderRadius: 16,
		alignItems: "center",
		justifyContent: "center",
	},

	googlebtntext: {
		color: "#7F3DFF",
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 10,
	},

	image: {
		width: 30,
		height: 30,
	},

	footerText: {
		fontSize: 18,
		marginTop: 20,
		textAlign: "center",
		color: "#91919F",
	},

	linkText: {
    marginTop:20,
		color: "#7F3DFF",
    fontSize:21,
    textAlign:'center',
    fontWeight:'bold'
	},
});

export default Register;
