import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text>뒤로가</Text>
      <Text>임시</Text>
      <Text>메뉴</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Header;
