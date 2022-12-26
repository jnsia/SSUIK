import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import ProfileDefaultImage from '../../Images/love-img-test.png';

const Resister = ({navigation}) => {
  const [userNickname, setuserNickname] = useState('');
  const [userID, setuserID] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userCheckPW, setuserCheckPW] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userBirthday, setuserBirthday] = useState('');

  return (
    <ScrollView>
      <View style={{margin: 20}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold'}}>회원정보</Text>
          <Image
            source={ProfileDefaultImage}
            resizeMode={'contain'}
            style={{width: 50, height: 50, margin: 20}}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>닉네임</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="닉네임"
            value={userNickname}
            onChangeText={setuserNickname}
            returnKeyType="next"
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>이름</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="아이디"
            value={userID}
            onChangeText={setuserID}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>이메일</Text>
          <TextInput
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            style={styles.input}
            placeholder="이메일"
            value={userEmail}
            onChangeText={setuserEmail}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>비밀번호</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="비밀번호"
            value={userPW}
            onChangeText={setuserPW}
            secureTextEntry
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>비밀번호 확인</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="비밀번호 확인"
            value={userCheckPW}
            onChangeText={setuserCheckPW}
            secureTextEntry
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>전화번호</Text>
          <TextInput
            autoCapitalize={'none'}
            style={styles.input}
            placeholder="01012345678"
            value={userPhoneNumber}
            onChangeText={setuserPhoneNumber}
          />
        </View>
        <View style={styles.resisterInputArea}>
          <Text style={{fontWeight: 'bold', padding: 10}}>생년월일 6자리</Text>
          <TextInput
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            style={styles.input}
            placeholder="980309"
            value={userBirthday}
            onChangeText={setuserBirthday}
          />
        </View>
        <TouchableOpacity
          style={styles.resisterBtn}
          onPress={() => navigation.push('Login')}>
          <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>
            시작하기
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    fontSize: 16,
    padding: 5,
    paddingLeft: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: 'lightgrey',
  },
  resisterInputArea: {
    fontWeight: 'bold',
  },
  resisterBtn: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    padding: 5,
    backgroundColor: '#FF9500',
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default Resister;
