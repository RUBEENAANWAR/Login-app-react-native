import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const ButtonComponent = ({ text, backgroundColor, size, textColor, borderColor, onPress }) => {
  return (
    <TouchableOpacity
    style={[styles.button, { backgroundColor, padding: size, borderColor: borderColor, borderWidth: 1 }]}
      onPress={onPress}
    >
        <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
},
  buttonText: {
    // color: color,
    fontSize: moderateScale(14),
  },
});

export default ButtonComponent;
