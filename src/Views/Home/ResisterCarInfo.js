import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import React from 'react';

const ResisterCarInfo = () => {
  return (
    <View>
      <Text>닉네임</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="이메일 주소"
        placeholderTextColor={'#ddd'}
      />
      <Text>이름</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="이름"
        placeholderTextColor={'#ddd'}
      />
      <Text>이메일</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="이메일"
        placeholderTextColor={'#ddd'}
      />
      <Text>비밀번호</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="비밀번호"
        placeholderTextColor={'#ddd'}
      />
      <Text>비밀번호 확인</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="비밀번호 확인"
        placeholderTextColor={'#ddd'}
      />
      <Text>전화번호</Text>
      <TextInput
        value={this.state.myTextInput}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        style={styles.input}
        placeholder="전화번호"
        placeholderTextColor={'#ddd'}
      />
      <View style={{marginTop: 40}}>
        <View style={styles.button}>
          <Button title="가입하기" color="#48567" />
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

export default ResisterCarInfo;
