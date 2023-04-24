import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

import ProfileDefaultImage from '../../Images/love-img-test.png';
import axios from 'axios';

const Resister = ({navigation}) => {
  const [userNickname, setuserNickname] = useState('');
  const [userEmail, setuserEmail] = useState('');
  const [userPW, setuserPW] = useState('');
  const [userCheckPW, setuserCheckPW] = useState('');
  const [userName, setuserName] = useState('');
  const [userBirthday, setuserBirthday] = useState('');
  const [userPhoneNumber, setuserPhoneNumber] = useState('');
  const [userSex, setuserSex] = useState('a');
  const [userImage, setuserImage] = useState('a');
  const [userJob, setuserJob] = useState('a');

  const resisterSubmit = async () => {
    try {
      axios
        .post('http://localhost:8001/auth/resister', {
          email: userEmail,
          password: userPW,
          name: userName,
          birthday: userBirthday,
          phoneNumber: userPhoneNumber,
          sex: userSex,
          image: userImage,
          nickname: userNickname,
          job: userJob,
        })
        .then(alert('회원가입이 완료되었습니다!'))
        .then(navigation.push('Login'));
    } catch (error) {
      return console.log(error);
    }
  };

  const endPoint = 6;

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
            value={userName}
            onChangeText={setuserName}
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
            keyboardType={'number'}
            style={styles.input}
            placeholder="980309"
            value={userBirthday}
            onChangeText={setuserBirthday}
          />
        </View>
        <TouchableOpacity
          style={styles.resisterBtn}
          onPress={() => resisterSubmit()}>
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
