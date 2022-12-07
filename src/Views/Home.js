import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={{margin: 20}}>
      <View style={styles.adContent}>
        <Text style={styles.text}>현재 나의 포인트: {'my point'}</Text>
        <View>
          <Image
            style={{
              height: 300,
              width: 300,
              // borderWidth: 1,
              // borderColor: 'black',
              resizeMode: 'contain',
            }}
            source={require('../Images/sample.jpg')}
          />
        </View>
        <Text style={styles.text}>해당 광고 리워드: {'reward point'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adContent: {
    borderColor: 'black',
    // borderWidth: 1,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: '30%',
  },
  text: {
    fontSize: 20,
    margin: 20,
  },
});

export default Home;
