import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
    const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phNumber, setPhNumber] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    try {
      const existingUser = await AsyncStorage.getItem('user');
      if (existingUser !== null) {
        const parsedUser = JSON.parse(existingUser);
        if (parsedUser.email === email) {
          Alert.alert('Error', 'Username already exists!');
          return;
        }
      }
      const user = { email, password,username,phNumber};
      await AsyncStorage.setItem('user', JSON.stringify(user));
      alert('Signup successful!');
      navigation.navigate('Login');
    } catch (e) {
      console.error(e);
    }
  };


  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>
            Let's create your account!
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            onChangeText={setUsername}
            keyboardType="name"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
           <TextInput
              style={styles.input}
              placeholder="Phone number"
              value={phNumber}
              onChangeText={setPhNumber}
              secureTextEntry={!showPassword}
            /> 
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <Icon2 name={showPassword ? 'eye' : 'eye-off'} size={20} color="#bbb" style={styles.eyeIcon} onPress={togglePasswordVisibility}/>
          
          </View>
                    
          <View style={{flexDirection:'row',alignItems:'center',marginBottom: 20,}}>
          <Text style={{color:'#000'}}>Already have an account?</Text>
            <TouchableOpacity style={styles.forgotPassword} onPress={() =>navigation.navigate('Login')}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          text="Login"
          backgroundColor="rgb(0 180 185)"
          size={12}
          textColor="#fff"
          onPress={handleSignup}
          borderColor="#fff"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingBottom: moderateScale(20),
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    paddingTop: moderateScale(50),
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#bbb',
    borderRadius: 15,
    padding: 5,
  },
  logo: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginVertical: moderateScale(20),
    // alignSelf: 'center',
  },
  input: {
    width: '100%',
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#d8e8eb',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  passwordContainer: {
    position: 'relative',
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
    top: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-start',
    // paddingTop: moderateScale(5),
  },
  loginText: {
    color: 'red',
    paddingLeft:4
  },
  loginButton: {
    width: '100%',
    padding: 12,
    backgroundColor: '#0a0a0a',
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    padding: moderateScale(15),
  },
  singinText: {
    color: '#000',
  },
  loadingOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: Semi-transparent background
  },
});

export default SignIn;
