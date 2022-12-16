import React from 'react';
import {View, StyleSheet} from 'react-native';
import RadioItem from './RadioItem';

const Radio = ({
  items,
  selected,
  onSelect,
  isStrech
}) => {
  return (
    <View style={styles.container}>
      {items.map((item, idx) => {
        return (
          <RadioItem 
            key={item.key} 
            item={item}
            isPressed={onSelect}
            isActive={selected} />
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // paddingHorizontal: 12,
    paddingVertical: 8,
    // backgroundColor: 'salmon'
  }
})

export default Radio;
