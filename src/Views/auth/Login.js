import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LogoImage from '../../Images/ssuik-logo.png';

const Login = ({navigation}) => {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');

  function checkInfo() {
    const storeData = async () => {
      try {
        const jsonValue = JSON.stringify(true);
        await AsyncStorage.setItem('isLogin', jsonValue);

        console.log(jsonValue);
      } catch (e) {
        console.log('set error');
      }
    };

    // 아이디 입력 유무 체크

    // 암호 입력 유무 체크

    storeData();
  }

  return (
    <View style={{margin: 40, top: 80}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={LogoImage}
          resizeMode={'contain'}
          style={{width: 200, height: 200}}
        />
      </View>
      <View style={{marginTop: 20, marginBottom: 20}}>
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
      </View>
      <View>
        <TouchableOpacity style={styles.loginBtn} onPress={checkInfo}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            로그인
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.push('Resister')}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            회원가입
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 16,
    padding: 10,
    paddingLeft: 15,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  loginBtn: {
    marginTop: 10,
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    backgroundColor: '#FF9500',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default Login;
