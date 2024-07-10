import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const Header = ({onLogoutPress}) => {

  return (
    <View style={styles.container}>
             <Image source={require('../statisticss/mykareLogo.png')} style={styles.logo} />
        <View style={styles.spacer} />
          <TouchableOpacity onPress={onLogoutPress} style={styles.iconButton}>
            <Text style={{color:'#fff'}}>Logout</Text>
          </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(14),
    backgroundColor: "rgb(0 180 185)",
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
    tintColor: '#fff'
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
  image:{
    size:moderateScale(10)
  }
});

export default Header;
