import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

const Event = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.text}>이벤트 준비 중입니다.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});

export default Event;
