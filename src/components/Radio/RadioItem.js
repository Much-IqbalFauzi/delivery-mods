import React from 'react';
import {View, StyleSheet, Pressable, Image, Text} from 'react-native';

const RadioItem = ({
  item,
  isPressed,
  isActive
}) => {

  const ItemActive = () => {
    return isActive === item.key && <Image style={styles.checkImg} source={require('../../../assets/images/Checked.png')} />
  }
  return (
    <View style={{marginVertical: 12}}>
      <Pressable onPress={isPressed.bind(null, item.key)} android_ripple={{color: 'rgba(255, 235, 235, 0.5)'}}>
        <View style={styles.container}>
          <View style={styles.label}>
            { item.imgUri !== '' && <Image style={styles.lebelImg} source={item.imgUri} /> }
            <Text style={styles.labelText}>Login sebagai {item.value}</Text>
          </View>
          <View style={styles.checkWrapper}>
            <ItemActive />
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12
  },
  label: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  lebelImg: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  labelText: {
    fontSize: 18,
    margin: 4
  },
  checkImg: {
    width: '100%',
    height: '100%'
  },
  checkWrapper: {
    backgroundColor: 'white',
    width: 25,
    height: 25,
    borderRadius: 12,
    elevation: 5
  }
})

export default RadioItem;
