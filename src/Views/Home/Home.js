import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={{margin: 20}}>
      <View>
        <TouchableOpacity
          style={{backgroundColor: 'lightblue', padding: 10}}
          onPress={() => navigation.push('ResisterCarInfo')}>
          <Text style={{textAlign: 'center', fontSize: 24}}>
            내 차량 및 위치 정보 등록
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{margin: 20, marginTop: 40}}>
        <Text style={styles.text}>현재 나의 포인트: {'???'}</Text>
        <View style={styles.adContent}>
          <Image
            style={{
              height: 250,
              width: 250,
              resizeMode: 'contain',
            }}
            source={require('../../Images/sample.jpg')}
          />
        </View>
        <Text style={styles.text}>해당 광고 리워드: {'???'}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  adContent: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default Home;
