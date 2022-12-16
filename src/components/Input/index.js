import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Text, Pressable} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

const Input = ({
  keyboardType = 'default',
  value,
  children = null,
  placeholder,
  onChangeText,
  isPassword = false
}) => {
  const [isFocus, setIsFocus] = useState(false)
  const [isPwShow, setIsPwShow] = useState(isPassword)
  const inputFocusHandler = () => {
    setIsFocus(true)
  }
  const inputBlurHandler = () => {
    setIsFocus(false)
  }
  const toggleOnPressHandler = () => {
    setIsPwShow(prevState => !prevState)
  }

  const IsPasswordField = () => {
    return (
      
      <Pressable onPress={toggleOnPressHandler}>
        <Entypo name={isPwShow ? 'eye' : 'eye-with-line'} size={24} color="black" />
      </Pressable>
    )
  }
  return (
    <View style={[styles.container, isFocus && styles.containerFocussed]}>
      { children !== null && <Text>{children}</Text>}
      <View style={styles.inputFieldWrapper}>
        <TextInput
          style={styles.inputFIeld}
          keyboardType={keyboardType}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={isPwShow}
          onFocus={inputFocusHandler}
          onBlur={inputBlurHandler} />
        <View style={styles.showPassword}>
          { isPassword && <IsPasswordField />}
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    // backgroundColor: 'white',
    paddingHorizontal: 4,
    borderBottomColor: 'gray',
    borderBottomWidth: 2
  },
  containerFocussed: {
    borderBottomColor: 'black'
  },
  inputFieldWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  showPassword: {
    position: 'absolute',
    right: 0,
    alignSelf: 'center'
  },
  inputFIeld: {
    // backgroundColor: 'rgba(0,0,0, 0)',
    // backgroundColor: 'salmon',
    width: '100%',
    padding: 8
  }
})

export default Input;
