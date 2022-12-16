import React, { useState } from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../components/Input';
import Radio from '../components/Radio';

const LoginScreen = () => {

  const [selectedRadio, setSelectedRadio] = useState('');
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const radioItems = [
    {
      key: 'admin',
      value: 'Admin',
      imgUri: require('../../assets/images/Group_164.png') 
    },
    {
      key: 'kurir',
      value: 'Kurir',
      imgUri: require('../../assets/images/ic_box_search.png')
    }
  ]

  const selectedRadioHandler = (key) => {
    setSelectedRadio(key)
  }
  const enteredUsernameHandler = (value) => {
    setUsername(value)
  } 

  const enteredPasswordHandler = (value) => {
    setPassword(value)
  }
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.logoSection}>
          <Image  style={styles.logo} source={require("../../assets/images/mods_logo.png")} />
          <Text style={{fontWeight: 'bold'}}>Selamat Datang!</Text>
          <Text>Silakan masukkan akun anda!</Text>
        </View>
        <View style={styles.radioContainer}>
          <Radio 
            selected={selectedRadio} 
            onSelect={selectedRadioHandler}
            items={radioItems} />
        </View>
        <View style={styles.textInputField}>
          <Input 
            value={username}
            placeholder='Username'
            onChangeText={enteredUsernameHandler} />

            <Input 
            value={password}
            placeholder='Password'
            isPassword={true}
            onChangeText={enteredPasswordHandler} />
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray'
  },
  logoSection: {
    // width: '100%',
    paddingVertical: 18,
    alignItems: 'center',
    flexDirection: 'column'
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 24,
    marginTop: 18
  },
  radioContainer: {
    width: '100%',
    // backgroundColor: 'lightblue'
  },
  textInputField: {
    width: '90%'
  }
})

export default LoginScreen;
