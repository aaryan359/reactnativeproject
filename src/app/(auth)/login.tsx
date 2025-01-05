import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Route, router } from 'expo-router';
import { useDispatch } from 'react-redux';
import { setToken, clearToken } from "../../redux/authSlice";



const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const dispatch =  useDispatch();


  function handlelogin(){

      
      dispatch(setToken("token_example"));
     

      console.log("Dispatch in login page:", dispatch); 

      router.push('./(main)');


  }






  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
       
      </TouchableOpacity>
      <Text style={styles.title}>Login</Text>

     

      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />



      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.inputPassword}
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        >
          <Text style={styles.eyeIcon}>{isPasswordVisible ? '🙈' : '👁️'}</Text>
        </TouchableOpacity>
      </View>

       

        <TouchableOpacity style={styles.loginButton}>
                      <Text style={styles.loginButtonText} onPress={handlelogin}>Login</Text>
        </TouchableOpacity>

   
      <TouchableOpacity onPress={()=>{
        router.push('./forgotpass')}}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>



      {/* Signup Link */}
      <Text style={styles.signupText}>
        Don't have an account yet?{' '}
        <Text style={styles.signupLink} onPress={() => router.push('./register')}>
          Sign Up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    
    
  },
  backText: {

    fontSize: 50,
    color: '#333',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 100,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 18,
    marginBottom: 15,
    fontSize: 16,
  },
  passwordContainer: {
    position: 'relative',
    marginBottom: 20,
  },
  inputPassword: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 18,
    paddingRight: 56, 
    fontSize: 16,
  },
  eyeButton: {
    position: 'absolute',
    right: 13,
    top: 17,
  },

  eyeIcon: {
    fontSize: 18,
    color: '#333',
  },


  loginButton: {

    
    backgroundColor: '#7F3DFF',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginBottom: 20,
  },

  loginButtonText: {
    color: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
  },
  
  forgotPassword: {
    color: '#7F3DFF',
    textAlign: 'center',
    marginBottom: 15,
  },

  signupText: {
    textAlign: 'center',
    color: '#666',
  },
  signupLink: {
    color: '#7F3DFF',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
