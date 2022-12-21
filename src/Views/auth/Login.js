import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import LogoImage from '../../Images/sample.jpg';

const Login = ({navigation}) => {
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');

  function checkInfo() {
    // const userID = document.getElementById('userID');
    // const userPW = document.getElementById('userPW');

    // 아이디 입력 유무 체크
    if (userID.value === '') {
      alert('아이디를 입력하시오.');
      userID.focus();
      userID.select();
      return false;
    }

    // 암호 입력 유무 체크
    if (userPW.value === '') {
      alert('암호를 입력하세요.');
      userPW.focus();
      return false;
    }

    alert('환영합니다!');
    // document.loginForm.submit();
    navigation.push('Main');
  }

  return (
    <View style={{margin: 40}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={LogoImage}
          resizeMode={'contain'}
          style={{width: 250, height: 200}}
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
          autoFocus
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
    padding: 5,
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
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default Login;
