import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Feather';
import {moderateScale} from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import ButtonComponent from '../components/ButtonComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    console.log('reached login')
    try {
      const user = await AsyncStorage.getItem('user');
    console.log('user---',user)
      if (user !== null) {
    console.log('reached in the condition')
        const parsedUser = JSON.parse(user);
    console.log('parsedUser---',parsedUser)
        if (parsedUser.email == email && parsedUser.password == password) {
          Alert.alert('Login successful!');
          navigation.navigate('Home', { user: parsedUser });
        } else {
          Alert.alert('Invalid username or password');
        }
      } else {
        Alert.alert('No user found. Please signup first.');
      }
    } catch (e) {
      console.error(e,'error');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <View style={styles.container}>
          <Text style={styles.title}>Login</Text>
          {errorMsg &&
          <Text style={{color:'red'}}>{errorMsg}</Text>}
          <Text style={styles.subtitle}>
            Enter your email and password to get started!
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
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
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={styles.signIn} onPress={() =>navigation.navigate('SignIn')}>
            <Text style={styles.singinText}>Sign in</Text>
            <Icon2 name="arrow-right" size={20} color="#000"/>
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
          onPress={handleLogin}
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
    marginBottom: 8,
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
    marginBottom: 10,
    backgroundColor: '#d8e8eb',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  signIn:{
flexDirection:'row'
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
    paddingTop: moderateScale(5),
  },
  forgotPasswordText: {
    color: 'red',
    marginBottom: 20,
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
  singinText:{
    color:'#000'
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

export default LoginScreen;
