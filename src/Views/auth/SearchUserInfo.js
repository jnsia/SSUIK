import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  TextInput,
} from 'react-native';

function SearchUserInfo() {
  const [searchemail, setSearchEmail] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState();
  const [accessNumber, setAccessNumber] = useState();
  const [userEmail, setUserEmail] = useState('');

  const email = () => {
    setSearchEmail(true);
  };

  const password = () => {
    setSearchEmail(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={email}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: searchemail ? '#FFC550' : 'grey',
            }}>
            이메일 찾기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={password}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '600',
              color: searchemail ? 'grey' : '#FFC550',
            }}>
            비밀번호 찾기
          </Text>
        </TouchableOpacity>
      </View>
      {searchemail ? (
        <View style={styles.main}>
          <Text style={styles.text}>휴대전화번호 입력</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="-를 빼고 입력해주세요."
              value={phoneNumber}
              onChangeText={setPhoneNumber}></TextInput>
          </View>
          <TouchableOpacity>
            <Text>인증번호 받기</Text>
          </TouchableOpacity>
          <Text style={styles.text}>인증번호 입력</Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="문자로 온 인증번호를 입력해주세요."
              value={accessNumber}
              onChangeText={setAccessNumber}></TextInput>
          </View>
          <TouchableOpacity>
            <Text>이메일 찾기</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.main}>
          <View>
            <Text style={styles.text}>이메일 입력</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="이메일을 입력해주세요."
                value={userEmail}
                onChangeText={setUserEmail}></TextInput>
            </View>
          </View>
          <View>
            <Text style={styles.text}>휴대전화번호 입력</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.input}
                placeholder="-를 빼고 입력해주세요."
                value={phoneNumber}
                onChangeText={setPhoneNumber}></TextInput>
            </View>
          </View>
          <TouchableOpacity>
            <Text>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  main: {
    marginHorizontal: 40,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  inputBox: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    color: 'lightgray',
  },
});

export default SearchUserInfo;
