import {View, Text, StyleSheet, Image, TextInput, Button} from 'react-native';
import React from 'react';

import LogoImage from '../../Images/sample.jpg';

const Login = () => {
  return (
    <View>
      <View>
        <Image
          source={LogoImage}
          resizeMode={'contain'}
          style={{width: 300, height: 88}}
        />
      </View>
      <View>
        <TextInput
          value={this.state.myTextInput}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          style={styles.input}
          placeholder="이메일 주소"
          placeholderTextColor={'#ddd'}
        />
        <TextInput
          value={this.state.myTextInput}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor={'#ddd'}
        />
      </View>
      <View style={{marginTop: 40}}>
        <View style={styles.button}>
          <Button title="로그인" color="#48567" />
        </View>
        <View style={styles.button}>
          <Button title="회원가입" color="#48567" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    fontSize: 17,
    padding: 5,
    marginTop: 30,
  },
});

export default Login;
