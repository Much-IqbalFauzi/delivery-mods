import React from 'react';
import {View, StyleSheet, Pressable, Text } from 'react-native';

const Button = ({children, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable>
        <Text style={[styles.text]}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  text: {
    color: 'white'
  }
})

export default Button;
