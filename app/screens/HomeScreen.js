import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import {moderateScale } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
      navigation.navigate('Login');
  };

  return (
  <>
  <View >
  <Header onLogoutPress={handleLogout}/>
  </View>
    <View style={styles.container}>
      <Text style={styles.subtitle}>Welcome to MyKare health!!</Text>
      <Image source={require('../statisticss/mykareLogo.png')} />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:'100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff',
  },
  subtitle: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingBottom: moderateScale(25),
  },
});

export default HomeScreen;
