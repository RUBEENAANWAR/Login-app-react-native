import React,{useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Profile = (user) => {
    console.log("user-----jiji",user)
  const navigation = useNavigation();

  const handleLogout = async () => {
      dispatch(logout());
    navigation.navigate('Login')
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: moderateScale(10),
      }}>
      <View style={styles.ProfileContainer}>
        <View
          style={{
            width: moderateScale(50),
            height: moderateScale(50),
            backgroundColor: '#f2f2f2',
            borderRadius: moderateScale(25),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name={'person'} size={26} color="#000" />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nameText}>{user.user.username}</Text>
          <Text style={styles.emailText}>{user.user.email}</Text>
          <Text style={styles.emailText}>{user.user.phNumber}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    //   paddingVertical: moderateScale(25),
    paddingHorizontal: moderateScale(25),
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    height: '15%',
  },
  textContainer: {
    marginLeft: moderateScale(20),
    justifyContent: 'space-between',
    display: 'flex',
    //   backgroundColor:"blue"
  },
  nameText: {
    fontSize: moderateScale(20),
    fontWeight: '500',
    color: '#000',
  },
  emailText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
