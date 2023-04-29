import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  BackHandler,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoImage from '../../Images/ssuik-logo.png';
import brandSample1 from '../../Images/brandSample1.png';
import brandSample2 from '../../Images/brandSample2.png';
import brandSample3 from '../../Images/brandSample3.png';
import brandSample4 from '../../Images/brandSample4.jpg';
import axios from 'axios';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Login = ({navigation}) => {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');

  useEffect(() => {
    if (Platform.OS === 'android') {
      const backHandler = BackHandler.addEventListener(
        'hardwareBackPress',
        () => {
          return true;
        },
      );

      return () => backHandler.remove();
    }
  }, []);

  let loginInfo = {
    userID: userID,
    userPW: userPW,
  };

  const storeLogin = async value => {
    if (userID === '') {
      return alert('아이디를 입력해 주세요.');
    }

    if (userPW === '') {
      return alert('비밀번호를 입력해 주세요.');
    }

    try {
      const isLogin = JSON.stringify(value);
      await AsyncStorage.setItem('@isLogin', isLogin);
      console.log(isLogin);
    } catch (e) {
      console.log('set error');
    }

    axios
      .post('http://localhost:8001/auth/login', {
        email: userID,
        password: userPW,
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });

    // navigation.push('Main');
  };

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
            placeholder="이메일"
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
            onPress={() => navigation.push('SearchUserInfo')}>
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
            <Image source={brandSample1} style={styles.linkageImage} />
            <Image source={brandSample2} style={styles.linkageImage} />
            <Image source={brandSample3} style={styles.linkageImage} />
            <Image source={brandSample4} style={styles.linkageImage} />
          </View>
          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => storeLogin(loginInfo)}>
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
