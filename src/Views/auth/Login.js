import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoImage from '../../Images/ssuik-logo.png';
import testImage from '../../Images/testBrand.jpg';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');

  function checkInfo() {
    const storeData = async () => {
      try {
        const isLoggedIn = JSON.stringify(true);
        await AsyncStorage.setItem('isLogin', isLoggedIn);

        console.log(isLoggedIn);
        navigation.navigate('Main');
      } catch (e) {
        console.log('set error');
      }
    };

    if (userID !== 'test') {
      return alert('아이디가 틀렸습니다.');
    }

    if (userPW !== 'test') {
      return alert('비밀번호가 틀렸습니다.');
    }

    storeData();
    navigation.push('Main');
  }

  return (
    <View style={styles.container}>
      <View style={{marginHorizontal: 20, justifyContent: 'center', flex: 1}}>
        <View>
          <Image
            source={LogoImage}
            resizeMode={'cover'}
            style={{width: '100%', height: 250}}
          />
        </View>
        <View>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            returnKeyType="next"
            placeholder="아이디"
            value={userID}
            onChangeText={setuserID}
          />
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="비밀번호"
            value={userPW}
            onChangeText={setuserPW}
            secureTextEntry
          />
          <Text
            style={{color: 'grey', fontSize: 12, paddingLeft: 10}}
            onPress={() => navigation.push('Main')}>
            아이디/비밀번호 찾기
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'flex-end',
              marginBottom: 40,
              marginTop: 120,
            }}>
            <Image source={testImage} style={styles.linkageImage} />
            <Image source={testImage} style={styles.linkageImage} />
            <Image source={testImage} style={styles.linkageImage} />
            <Image source={testImage} style={styles.linkageImage} />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={checkInfo}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 16,
                fontWeight: '500',
                color: 'white',
              }}>
              로그인
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{color: 'grey', paddingRight: 10, fontSize: 13}}>
              계정이 없으신가요?
            </Text>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                fontWeight: 'bold',
                color: '#FFD500',
              }}
              onPress={() => navigation.push('Resister')}>
              가입하기
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    height: SCREEN_HEIGHT,
  },
  input: {
    width: '100%',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  linkageImage: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  loginBtn: {
    padding: 15,
    backgroundColor: '#FFD500',
    borderRadius: 10,
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default Login;
