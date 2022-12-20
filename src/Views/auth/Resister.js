import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
} from 'react-native';
import React from 'react';

import ProfileDefaultImage from '../../Images/love-img-test.png';

const Resister = () => {
  return (
    <ScrollView>
      <View>
        <Image
          source={ProfileDefaultImage}
          resizeMode={'contain'}
          style={{width: 50, height: 50}}
        />
      </View>
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
        <Text>성별</Text>
        <TextInput
          value={this.state.myTextInput}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          style={styles.input}
          placeholder="비밀번호"
          placeholderTextColor={'#ddd'}
        />
        <Text>생년월일 6자리</Text>
        <TextInput
          value={this.state.myTextInput}
          autoCapitalize={'none'}
          keyboardType={'email-address'}
          style={styles.input}
          placeholder="980309"
          placeholderTextColor={'#ddd'}
        />
      </View>
      <View style={{marginTop: 40}}>
        <View style={styles.button}>
          <Button title="가입하기" color="#48567" />
        </View>
      </View>
    </ScrollView>
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
  button: {},
});

export default Resister;
